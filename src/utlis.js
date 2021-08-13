import Swal from "sweetalert2";

export const message = (icon, message, timer) => {
    Swal.fire({
      icon: icon,
      title: message,
      timer: timer,
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };
  