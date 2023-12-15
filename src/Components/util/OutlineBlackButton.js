import React from "react";

function OutlineBlackButton({ children, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className=" outline outline-1 px-3 py-2 rounded-lg hover:bg-slate-900 hover:text-white hover:outline-slate-900 text-lg"
    >
      {children}
    </a>
  );
}

export default OutlineBlackButton;
