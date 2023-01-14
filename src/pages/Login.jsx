import styled from "@emotion/styled";
import Container from "components/common/Container";
import { Common } from "styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "apis/server-api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login as storeLogin } from "store/user";
import { useForm } from "react-hook-form";
import { showToast } from "lib/toast";
import AuthInput from "components/common/AuthInput";

const Base = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  margin: 40px 0 10px;
  img {
    width: 100%;
  }
`;

const Head = styled.h1`
  font-weight: 700;
  font-size: 1.5rem;
  color: ${Common.colors.black};
  margin: 10px 0;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Signin = styled.span`
  display: block;
  margin-bottom: 10px;
`;

const Social = styled.a`
  position: relative;
  margin: 4px 0;
  max-width: 600px;
  height: 50px;
  width: 100%;
  border-radius: 12px;
  border: none;
  box-shadow: none;
  color: ${({ color }) => color};
  background-color: ${({ bgColor }) => bgColor};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 50px;
  }
`;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [login, { data: loginRes = {}, isSuccess, isError, error }] =
    useLoginMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginSubmit = ({ email, password }) => {
    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      dispatch(storeLogin({ user: loginRes.user }));
      showToast(loginRes.message);
    }
  }, [navigate, loginRes, isSuccess, dispatch]);

  useEffect(() => {
    if (isError) {
      showToast(error.data.message);
    }
  }, [isError, error]);

  return (
    <Container>
      <Base>
        <Logo>
          <img src="/assets/logo.png" alt="MOVIE ROOM 로고" />
        </Logo>
        <Head>로그인</Head>
        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <AuthInput
            register={register("email", { required: true })}
            type="email"
            title="이메일"
            placeholder="이메일"
            autoFocus
          />
          <AuthInput
            register={register("password", { required: true })}
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
          />
          <AuthInput
            submit
            type="submit"
            title="로그인"
            value="로그인"
            disabled={isSubmitting}
          />
        </Form>
        <Link to="/signup">
          <Signin>회원가입</Signin>
        </Link>
        <Social color={"#fff"} bgColor={"#03C75A"} href="">
          <img src="/assets/naver-symbol.png" alt="네이버 심볼" />
          <div>네이버 로그인</div>
        </Social>
        <Social color={"#000D9"} bgColor={"#FEE500"} href="">
          <img src="/assets/kakao-symbol.png" alt="카카오 심볼" />
          <div>카카오 로그인</div>
        </Social>
      </Base>
    </Container>
  );
};

export default Login;
