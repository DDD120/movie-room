import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { Common } from "styles/common";
import { MdOutlineClose } from "react-icons/md";

const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 19;
  background-color: ${Common.colors.greyOpacity};
`;

const ModalLayouyt = styled.div`
  position: relative;
  margin: 10px;
  padding: 4px;
  width: 100%;
  max-width: 800px;
  height: 80%;
  max-height: 500px;
  border-radius: 12px;
  background-color: ${Common.colors.beige};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconWrapper = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
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
        <IconWrapper onClick={closeHandler}>
          <MdOutlineClose />
        </IconWrapper>
      </ModalLayouyt>
    </Backdrop>,
    document.getElementById("modal")
  );
};

export default Modal;
