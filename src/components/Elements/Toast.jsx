import React from "react";

function Toast({ message, type = "success", onClose }) {
  return (
    <div
      className={`fixed bottom-6 left-6 z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg text-white
      ${type === "error" ? "bg-red-600" : "bg-green-600"}`}
    >
      <span className="text-lg">
        {type === "error" ? "❌" : "✅"}
      </span>
      <span className="text-sm">{message}</span>
      <button
        onClick={onClose}
        className="ml-4 text-white text-lg leading-none hover:opacity-80"
      >
        ×
      </button>
    </div>
  );
}

export default Toast;
