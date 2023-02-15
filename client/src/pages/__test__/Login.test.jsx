import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "lib/test";
import Login from "pages/Login";

describe("Login Page", () => {
  const setup = () => {
    return renderWithProviders(<Login />);
  };

  it("renders correctly", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("Input value output test", async () => {
    setup();

    const emailValue = "email1234@mock.com";
    const passwordValue = "password1234";

    const email = screen.getByPlaceholderText("이메일");
    const password = screen.getByPlaceholderText("비밀번호");

    fireEvent.change(email, { target: { value: "email1234@mock.com" } });
    fireEvent.change(password, { target: { value: "password1234" } });

    expect(emailValue).toBe("email1234@mock.com");
    expect(passwordValue).toBe("password1234");
  });
});
