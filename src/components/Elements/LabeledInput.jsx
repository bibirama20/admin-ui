import React from 'react';
import Input from './Input';

function LabeledInput(props) {
  const { label, id, type = "text", placeholder = "", name, ...rest } = props;

  return (
    <>
      <label htmlFor={id} className="block text-sm mb-2">
        {label}
      </label>

      <input
        id={id}
        type={type}
        className="py-3 pl-4 text-sm rounded-md w-full bg-special-mainBg border border-gray-03 text-gray-01 focus:border-black focus:outline-none focus:ring-0"
        placeholder={placeholder}
        name={name}
        {...rest}
      />

            <Input id={id} {...rest} />
    </>
  );
}

export default LabeledInput;
