import React, { useState } from "react";

function LabeledInput(props) {
  const { label, id, type = "text", placeholder = "", name, ...rest } = props;
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          type={isPassword && showPassword ? "text" : type}
          name={name}
          placeholder={placeholder}
          className="py-3 pl-4 pr-10 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
          {...rest}
        />

        {/* Eye Toggle Button */}
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-400"
          >
            {showPassword ? (
              // eye-off icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a18.6 18.6 0 014.403-5.44M9.88 9.88a3 3 0 104.24 4.24M14.12 14.12L3 3m9 5a3 3 0 013 3"
                />
              </svg>
            ) : (
              // eye icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    </>
  );
}

export default LabeledInput;
