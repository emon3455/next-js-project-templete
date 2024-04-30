import Swal from "sweetalert2";

interface AlertProps {
  title?: string;
  text?: string;
  icon?: any;
  confirmButtonText?: string;
  cancelButtonText?: string;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  timer?: number;
  timerProgressBar?: boolean;
  onOpen?: any;
  onClose?: any;
  onBeforeOpen?: any;
  onRender?: any;
  allowOutsideClick?: boolean;
  allowEscapeKey?: boolean;
  allowEnterKey?: boolean;
  stopKeydownPropagation?: boolean;
  preConfirm?: any;
  input?: any;
  html?: any;
}

//success
export const successAlert = ({ title, text, ...rest }: AlertProps) => {
  return Swal.fire({
    icon: "success",
    title: title || "Success",
    text: text || "Successfully Done",
    timer: 3000,
    timerProgressBar: true,
    ...rest,
  });
};

//error
export const errorAlert = ({ title, text, ...rest }: AlertProps) => {
  return Swal.fire({
    icon: "error",
    title: title || "Error",
    text: text || "Something went wrong",
    ...rest,
  });
};

//warning

export const warningAlert = ({
  title,
  text,
  input,
  html,
  preConfirm,
  cancelButtonText,
  confirmButtonText,
  ...rest
}: AlertProps) => {
  return Swal.fire({
    icon: "warning",
    title: title || "Warning",
    text: text || "Something went wrong",
    cancelButtonText: cancelButtonText || "Cancel",
    confirmButtonText: confirmButtonText || "Confirm",
    showCancelButton: true,
    showLoaderOnConfirm: true,
    input: input,
    preConfirm: preConfirm,
    html: html,
    ...rest,
  });
};
