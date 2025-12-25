import React, { useContext } from "react";
import LogoNew from "../Elements/LogoNew";
import { ThemeContext } from "../../context/themeContext";

function AuthLayoutNeW(props) {
  const { children } = props;
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <main
        className={`bg-special-mainBg min-h-screen flex justify-center items-center ${theme.name}`}
      >
        {/* container start */}
        <div className="w-full max-w-sm">
          <LogoNew />
          {children}
        </div>
        {/* container end */}
      </main>
    </>
  );
}

export default AuthLayoutNeW;
