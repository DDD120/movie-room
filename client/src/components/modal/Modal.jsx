import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { breakpoint, colors, fontSize } from "styles/common";
import { MdOutlineClose } from "react-icons/md";

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 19;
  background-color: ${colors.greyOpacity};
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
  background-color: ${colors.beige};
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: ${breakpoint.md}) {
    height: 100%;
  }
`;
const CloseIcon = styled.button`
  position: absolute;
  top: 8px;
  right: 12px;
  font-size: ${fontSize.xl};
  cursor: pointer;
  color: ${colors.orangeOpacity};
`;

const Modal = ({ children, onClose, backdropTouchClose = false }) => {
  const handleBackdropClick = (event) => {
    if (!backdropTouchClose) {
      return;
    }
    event.target === event.currentTarget && onClose();
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
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
