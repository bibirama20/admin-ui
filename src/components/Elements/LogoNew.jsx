import React from "react";

function LogoNew() {
  return (
    <div className="flex flex-col items-center">
      {/* LOGO */}
      <div className="flex justify-center font-poppins tracking-wide text-primary text-4xl mb-3">
        <span className="font-bold">FINE</span>
        bank
        <span className="font-bold">.IO</span>
      </div>

      {/* SUBTITLE (Create an account) */}
      <div className="text-defaultBlack text-xl font-semibold">
        Create an account
      </div>
    </div>
  );
}

export default LogoNew;
