import styled from "@emotion/styled";
import Container from "components/common/Container";
import { colors, fontSize } from "styles/common";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "apis/server-api";
import { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
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
  font-size: ${fontSize.lg};
  color: ${colors.black};
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

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();
  const [login, { data: loginRes = {}, isSuccess, isError, error }] =
    useLoginMutation();

  const { isLoggedIn, id } = useSelector(
    (state) => ({
      isLoggedIn: state.user.isLoggedIn,
      id: state.user.user.id,
    }),
    shallowEqual
  );

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

  useEffect(() => {
    if (isLoggedIn) {
      navigate(`/my/${id}`);
    }
  }, [isLoggedIn, navigate, id]);

  return (
    <Container>
      <Base>
        <Logo>
          <img src="/assets/logo.png" alt="MOVIE ROOM ??????" />
        </Logo>
        <Head>?????????</Head>
        <Form onSubmit={handleSubmit(handleLoginSubmit)}>
          <AuthInput
            register={register("email", { required: true })}
            type="email"
            title="?????????"
            placeholder="?????????"
            autoFocus
          />
          <AuthInput
            register={register("password", { required: true })}
            type="password"
            title="????????????"
            placeholder="????????????"
          />
          <AuthInput
            submit
            type="submit"
            title="?????????"
            value="?????????"
            disabled={isSubmitting}
          />
        </Form>
        <Link to="/signup">
          <Signin>????????????</Signin>
        </Link>
      </Base>
    </Container>
  );
};

export default Login;
