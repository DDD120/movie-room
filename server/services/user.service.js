import { mailSender } from "../lib/mail";
import { me } from "../lib/me";
import { generateToken, setTokenCookie, validateToken } from "../lib/token";
import model from "../mongoose/model";

const { User } = model;

let certificationNumber;

const userService = {
  checkToken: async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      return;
    }
    try {
      const validatedToken = await validateToken(token);
      const recentUser = await User.findOne({ id: validatedToken.id });
      const user = me(recentUser);
      res.send(user);
    } catch (e) {
      throw new Error("토큰 검증에 실패하였습니다.");
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const loginUser = await User.findOne({ email });
      if (!loginUser) {
        return res.status(401).send({
          message: "이메일 혹은 비밀번호가 일치하지 않습니다.",
        });
      }

      const correctPassword = await loginUser.authenticate(password);
      if (!correctPassword) {
        return res.status(401).send({
          message: "이메일 혹은 비밀번호가 일치하지 않습니다.",
        });
      }

      const user = me(loginUser);

      const token = await generateToken(user);
      setTokenCookie(res, token);

      res.status(200).send({
        message: `반가워요 ${user.nickname}님 👋`,
        user,
      });
    } catch (e) {
      throw new Error("로그인에 실패하였습니다.", console.error(e));
    }
  },
  email: async (req, res) => {
    const { email } = req.body;

    try {
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(409).send({
          message: "이미 가입된 계정이 있습니다.",
        });
      }

      // 랜덤 5숫자 생성
      certificationNumber = Math.floor(Math.random() * (99999 - 10000) + 10000);

      await mailSender(email, certificationNumber);
      setTimeout(() => {
        certificationNumber = null;
      }, 180000);

      res.status(200).send({
        message: "회원가입을 위한 인증 메일이 전송되었습니다.",
      });
    } catch (e) {
      throw new Error(
        "회원가입을 위한 인증 메일 전송이 실패하였습니다.",
        console.error(e)
      );
    }
  },
  signup: async (req, res) => {
    const { inputNumber, email, password } = req.body;

    if (Number(inputNumber) === certificationNumber) {
      try {
        const newUser = await User({
          email,
          password,
          nickname: email,
        }).save();

        if (!newUser) {
          throw new Error("유저 생성에 실패하였습니다.");
        }

        const user = me(newUser);
        const token = await generateToken(user);
        setTokenCookie(res, token);

        res.status(200).send({
          message: "회원가입이 완료되었습니다.",
          user,
        });
      } catch (e) {
        throw new Error("회원가입 처리에 실패하였습니다.", console.error(e));
      }
    } else {
      res.status(401).send({
        message: "인증번호를 잘못 입력하셨습니다.",
      });
    }
  },
  updateProfile: async (req, res) => {
    const { id, nickname } = req.body;
    const thumbnail = req.file?.filename;

    try {
      if (thumbnail) {
        const updateUser = await User.findOneAndUpdate(
          {
            _id: id,
          },
          {
            $set: {
              nickname,
              thumbnail: `http://${req.get("host")}/image/${thumbnail}`,
            },
          },
          {
            new: true,
          }
        );

        if (!updateUser) {
          throw new Error("프로필 업데이트에 실패하였습니다.");
        }

        const user = me(updateUser);
        res.status(200).send(user);
      } else {
        const updateUser = await User.findOneAndUpdate(
          {
            _id: id,
          },
          {
            $set: {
              nickname,
            },
          },
          {
            new: true,
          }
        );

        if (!updateUser) {
          throw new Error("프로필 수정에 실패하였습니다.");
        }
        const user = me(updateUser);
        res.status(200).send({
          message: "프로필이 수정되었습니다.",
          user,
        });
      }
    } catch (e) {
      throw new Error("프로필 수정에 실패하였습니다.", console.error(e));
    }
  },
  logout: (req, res) => {
    res.clearCookie("token").end();
  },
  signout: async (req, res) => {
    const { id } = req.body;

    if (!id) {
      throw new Error("유저 id가 없습니다.");
    }

    try {
      await User.deleteOne({
        _id: id,
      });
      await Review.deleteMany({ userId: id });
      return res.clearCookie("token").send({
        message: "계정이 삭제되었습니다.",
      });
    } catch (e) {
      throw new Error("유저 삭제에 실패하였습니다.", console.error(e));
    }
  },
};

export default userService;
