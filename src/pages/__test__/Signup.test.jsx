import { fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "lib/test";
import Signup, { ERROR_MSG } from "pages/Signup";

describe("signup page", () => {
  const setup = () => {
    return renderWithProviders(<Signup />);
  };

  it("renders correctly", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("should render 'required' error message", async () => {
    setup();

    const button = screen.getByTitle("회원가입");
    userEvent.click(button);

    const required = await screen.findAllByText(ERROR_MSG.required);
    expect(required).toHaveLength(3);
  });

  it("should render 'invalidEmail' error message", async () => {
    setup();

    const email = screen.getByPlaceholderText("이메일");
    fireEvent.change(email, { target: { value: "1" } });

    const invalidEmail = await screen.findByText(ERROR_MSG.invalidEmail);
    expect(invalidEmail).toBeInTheDocument();
  });

  it("should render 'invalidPw' error message", async () => {
    setup();

    const password = screen.getByPlaceholderText("비밀번호");
    fireEvent.change(password, { target: { value: "1" } });

    const invalidPw = await screen.findByText(ERROR_MSG.invalidPw);
    expect(invalidPw).toBeInTheDocument();
  });

  it("should render 'invalidConfirmPw' error message", async () => {
    setup();

    const password = screen.getByPlaceholderText("비밀번호");
    const confirmPassword = screen.getByPlaceholderText("비밀번호 확인");
    fireEvent.change(password, { target: { value: "1" } });
    fireEvent.change(confirmPassword, { target: { value: "2" } });

    const invalidConfirmPw = await screen.findByText(
      ERROR_MSG.invalidConfirmPw
    );
    expect(invalidConfirmPw).toBeInTheDocument();
  });
});
