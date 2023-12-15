import React from "react";

function OutlineButton({ children, href }) {
  return (
    <a
      href={href}
      className=" outline outline-1 px-3 py-2 rounded-lg hover:bg-white hover:text-slate-900 hover:outline-white text-lg"
    >
      {children}
    </a>
  );
}

export default OutlineButton;
