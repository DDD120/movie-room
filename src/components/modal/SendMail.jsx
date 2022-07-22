import Modal from "./Modal";
import SuccessSendMail from "./SuccessSendMail";
import FailSendMail from "./FailSendMail";
import LoadingAnimation from "components/loading/LoadingAnimation";
import { useSelector } from "react-redux";

const SendMailModal = ({ closeHandler }) => {
  const {
    response: { type, msg },
    loading,
  } = useSelector((state) => state.signup);

  return (
    <Modal closeHandler={closeHandler} backdropTouchClose={false}>
      {loading ? (
        <LoadingAnimation />
      ) : type === "SUCCESS_SEND_EMAIL" ? (
        <SuccessSendMail msg={msg} />
      ) : (
        <FailSendMail msg={msg} closeHandler={closeHandler} />
      )}
    </Modal>
  );
};

export default SendMailModal;
