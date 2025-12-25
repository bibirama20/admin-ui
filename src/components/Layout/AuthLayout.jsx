import React, {useContext} from 'react'
import Logo from '../Elements/Logo'
import { ThemeContext } from "../../context/themeContext";

function AuthLayoutNeW(props) {
    const {children} = props;
    const {theme} = useContext(ThemeContext);
  return (
    <>    <main  className={`bg-special-mainBg min-h-screen flex justify-center items-center ${theme.name}`}
      >
      {/* container start */}
      <div className="w-full max-w-sm">
               <Logo/>
                {children}
     
      </div>
      {/* container end */}
    </main>
    </>
  )
}

export default AuthLayoutNeW