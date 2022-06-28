import styled from "@emotion/styled";
import { createPortal } from "react-dom";
import { Common } from "styles/common";

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
  padding: 4px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  max-width: 100%;
  height: 500px;
  max-height: 100%;
  border-radius: 12px;
  background-color: ${Common.colors.beige};
`;

const Modal = ({ children, closeHandler }) => {
  const onClose = (event) => {
    if (event.target === event.currentTarget) closeHandler();
  };

  return createPortal(
    <Backdrop onClick={onClose}>
      <ModalLayouyt>{children}</ModalLayouyt>
    </Backdrop>,
    document.getElementById("modal")
  );
};

export default Modal;
