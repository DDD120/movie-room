import styled from "@emotion/styled";
import Button from "components/common/Button";

const Msg = styled.p`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const FailSendMail = ({ msg, closeHandler }) => {
  return (
    <div>
      <Msg>{msg}</Msg>
      <Button clickEvent={closeHandler}>확인</Button>
    </div>
  );
};

export default FailSendMail;
