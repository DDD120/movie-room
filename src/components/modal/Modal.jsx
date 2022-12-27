import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { Common } from "styles/common";
import { MdOutlineClose } from "react-icons/md";

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 19;
  background-color: ${Common.colors.greyOpacity};
`;

const ModalLayouyt = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4px;
  width: 90%;
  max-width: 800px;
  max-height: 500px;
  height: 100%;
  border-radius: 12px;
  background-color: ${Common.colors.beige};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CloseIcon = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 2rem;
  cursor: pointer;
  color: ${Common.colors.orangeOpacity};
`;

const Modal = ({ children, closeHandler, backdropTouchClose }) => {
  const closeModal = (event) => {
    if (!backdropTouchClose) return;
    event.target === event.currentTarget && closeHandler();
  };

  return createPortal(
    <Backdrop onClick={closeModal} backdropTouchClose={backdropTouchClose}>
      <ModalLayouyt>
        {children}
        <CloseIcon onClick={closeHandler}>
          <MdOutlineClose />
        </CloseIcon>
      </ModalLayouyt>
    </Backdrop>,
    document.getElementById("modal")
  );
};

export default Modal;
