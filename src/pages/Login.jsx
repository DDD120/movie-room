import styled from "@emotion/styled";
import Container from "components/common/Container";
import { Common } from "styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useLoginMutation } from "apis/server-api";
import { useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setUser } from "store/user";

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.div`
  width: 200px;
  margin: 40px 0 10px;
  & > img {
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

const Input = styled.input`
  margin: 4px auto;
  max-width: 600px;
  width: 100%;
  border-radius: 50px;
  padding: 14px 30px;
  border: none;
  box-shadow: none;
  color: #fff;
  font-size: 1.025rem;
  cursor: ${({ submit }) => submit && "pointer"};
  background-color: ${({ submit }) =>
    submit ? `${Common.colors.cyan}` : `${Common.colors.orange}`};
  &::placeholder {
    color: #fff;
  }
  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    box-shadow: 0 0 0 1000px ${Common.colors.orange} inset;
    transition: background-color 5000s ease-in-out 0s;
    -webkit-box-shadow: 0 0 0 1000px ${Common.colors.orange} inset;
    -webkit-text-fill-color: #fff;
    -webkit-transition: background-color 5000s ease-in-out 0s;
  }
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
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    max-width: 50px;
  }
`;

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { data: loginRes = {}, isSuccess, error }] = useLoginMutation();

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (email && password) {
      await login({ email, password });
    }
  };

  const showSuccessNotify = useCallback((msg) => {
    toast.success(msg, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }, []);

  const showErrorNotify = useCallback((msg) => {
    toast.error(msg, {
      autoClose: 3000,
      hideProgressBar: true,
    });
  }, []);

  useEffect(() => {
    if (loginRes.type === "SUCCESS_LOGIN") {
      console.log(loginRes);
      navigate("/");
      dispatch(setUser({ user: loginRes.user }));
      showSuccessNotify(loginRes.msg);
    }
    error && showErrorNotify(loginRes.msg);
  }, [
    error,
    isSuccess,
    navigate,
    loginRes,
    showSuccessNotify,
    showErrorNotify,
    dispatch,
  ]);

  return (
    <Container>
      <Layout>
        <Logo>
          <img src="/assets/logo.png" alt="로고" />
        </Logo>
        <Head>로그인</Head>
        <Form onSubmit={handleLoginSubmit} action="">
          <Input
            ref={emailRef}
            type="email"
            title="이메일"
            placeholder="이메일"
            autoFocus
          />
          <Input
            ref={passwordRef}
            type="password"
            title="비밀번호"
            placeholder="비밀번호"
          />
          <Input submit type="submit" title="로그인" value="로그인" />
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
      </Layout>
    </Container>
  );
};

export default Login;
