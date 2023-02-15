import { toast } from "react-toastify";

export const showToast = (message) => {
  toast(message, {
    autoClose: 3000,
    hideProgressBar: true,
  });
};
