import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';

// Define the Modal component using forwardRef so parent can call internal methods
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md bg-gray-200" ref={dialog}>
      {children}
      <form method="dialog" className=' text-right mt-4'>
        <button className=' font-bold my-4 text-black bg-blue-500 rounded-md 
         hover:bg-green-700 py-2 px-6 border-purple-950 border-2'>{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById('modal-root') // This is important!
  );
});

export default Modal;
