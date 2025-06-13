import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const styleB =
    "w-full p-1 border-b-2 rounded-sm border-purple-700 bg-blue-300 text-stone-800 focus:outline-none focus:border-purple-800";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-purple-950">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={styleB} {...props} />
      ) : (
        <input ref={ref} className={styleB} {...props} />
      )}
    </p>
  );
});

export default Input;
