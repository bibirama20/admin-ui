import React from 'react'
import LogoNew from '../Elements/LogoNew'

function AuthLayoutNeW(props) {
    const {children} = props;
  return (
    <>    <main className="bg-special-mainBg min-h-screen flex justify-center items-center">
      {/* container start */}
      <div className="w-full max-w-sm">
               <LogoNew/>
                {children}
     
      </div>
      {/* container end */}
    </main>
    </>
  )
}

export default AuthLayoutNeW