import { cssTransition } from "react-toastify";

export const animateList = ["fadeIn", "fadeInLeft", "fadeInUp"];

export const toastEmitter = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
  transition: cssTransition({
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut",
  }),
};
