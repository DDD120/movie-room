import { renderWithProviders } from "lib/test";
import MailAuthenticationModal from "..";
import ReactDOM from "react-dom";
import { act, screen } from "@testing-library/react";

jest.useFakeTimers();

describe("MailAuthentication Modal", () => {
  const setup = () => {
    return renderWithProviders(
      <MailAuthenticationModal
        email="email1234@mock.com"
        password="password1234"
        onClose={() => jest.fn()}
      />
    );
  };

  const oldCreatePortal = ReactDOM.createPortal;

  beforeEach(() => {
    ReactDOM.createPortal = (node) => node;
  });

  afterAll(() => {
    ReactDOM.createPortal = oldCreatePortal;
  });

  it("renders correctly", () => {
    const { container } = setup();
    expect(container).toMatchSnapshot();
  });

  it("should change after 180s the text of the button", async () => {
    setup();

    const checkButton = screen.getByText("확인");
    expect(checkButton).toBeInTheDocument();

    act(() => jest.advanceTimersByTime(179000));

    act(() => jest.advanceTimersByTime(1000));

    const resendButton = await screen.findByText("인증 메일 재전송");
    expect(resendButton).toBeInTheDocument();
  });
});
