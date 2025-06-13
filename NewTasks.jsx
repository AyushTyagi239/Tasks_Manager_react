import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === "") {
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  }

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        value={enteredTask}
        className="w-64 px-2 rounded-sm bg-blue-400 border-2 border-purple-950 p-1"
      />
      <button
        onClick={handleClick}
        className="bg-green-700 text-pink-300 hover:text-white hover:bg-green-900 border-2 border-black rounded-sm mx-2 p-1"
      >
        Add Task
      </button>
    </div>
  );
}
