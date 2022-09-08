import Modal from "../Modal";

const SettingModal = ({ closeHandler }) => {
  return (
    <Modal closeHandler={closeHandler} backdropTouchClose>
      <h1>설정</h1>
      <ul>
        <li>프로필 수정</li>
        <li>로그아웃</li>
        <li>회원탈퇴</li>
      </ul>
    </Modal>
  );
};

export default SettingModal;
