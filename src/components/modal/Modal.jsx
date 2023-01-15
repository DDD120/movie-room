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

const Base = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  width: 100%;
  padding: 4px;
  border-radius: 12px;
  background-color: ${Common.colors.beige};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 800px) {
    height: 100%;
  }
`;
const CloseIcon = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 2rem;
  cursor: pointer;
  color: ${Common.colors.orangeOpacity};
`;

const Modal = ({ children, onClose, backdropTouchClose = false }) => {
  const closeModal = (event) => {
    if (!backdropTouchClose) return;
    event.target === event.currentTarget && onClose();
  };

  return createPortal(
    <Backdrop onClick={closeModal} backdropTouchClose={backdropTouchClose}>
      <Base>
        {children}
        <CloseIcon onClick={onClose}>
          <MdOutlineClose />
        </CloseIcon>
      </Base>
    </Backdrop>,
    document.getElementById("modal")
  );
};

export default Modal;
