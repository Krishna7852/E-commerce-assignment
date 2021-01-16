import React, { forwardRef, useImperativeHandle } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
/**
 * Toast component is to display toast messages.
 * @param props Message to diplay in Toast box.
 * 
 */

const Toast = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    notify(message: string) {
      toast(message, {
        autoClose: 2000,
        position: "bottom-right",
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
      });
    },
  }));
  return (
    <div>
      <ToastContainer />
    </div>
  );
});

export default Toast;
