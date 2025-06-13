import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDes = description.current.value;
    const enteredDate = dueDate.current.value;

    // ❗ Fix: Check for empty strings, not "null"
    if (
      enteredTitle.trim() === '' ||
      enteredDes.trim() === '' ||
      enteredDate.trim() === ''
    ) {
      modal.current.open(); // Open the error modal
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDes,
      dueDate: enteredDate
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h1 className=" text-2xl font-bold text-red-700 my-4">INVALID INPUT</h1>
        <p className="text-xl font-bold text-purple-950 my-4">Oops... looks like you entered a wrong value.</p>
        <p className="text-xl font-bold text-purple-950 my-4">Please make sure you entered a valid value in every field.</p>
      </Modal>

      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-2 my-4">
          <li>
            <button
            onClick={onCancel}
              className="font-bold text-white hover:text-black 
              bg-purple-800 hover:bg-red-500 py-2 px-6 rounded-md
              border-red-800 border-2 border-b-4"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="font-bold text-white hover:text-black 
              bg-purple-800 hover:bg-green-500 py-2 px-6 rounded-md 
              border-green-700 border-2 border-b-4"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>

        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
}
