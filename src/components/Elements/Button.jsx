import React from "react";

function Button(props) {
  const { children = "Sign In", type = "SignUp", variant = "primary" } = props;

  const baseClasses = "h-12 rounded-md text-sm font-medium w-full flex items-center justify-center";
  const variantClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-gray-200 text-gray-700 border border-gray-300",
  };

  const finalClasses = `${baseClasses} ${variantClasses[variant]}`;

  return (
    <button className={finalClasses} type={type}>
      {children}
    </button>
  );
}

export default Button;
