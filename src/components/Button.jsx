// src/components/Button.jsx
import React from "react";

export default function Button({
  text,
  type = "button",
  variant = "blue",
  rounded = true,
   icon = null,
  onClick,
  className = "",
}) {
  const styles = {
    blue: "bg-[#00418c] text-white text-sm border border-[#00418c] ",
    white: "bg-white text-[#00418c] text-sm border border-[#00418c] ",
    lightblue: "bg-[#c2deff] text-[#00418c] text-sm border border-[#00418c]",
  };
const layout = icon ? "flex items-center justify-center gap-2" : "";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${layout} px-5 py-1  transition duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed 
                  ${styles[variant]} ${
        rounded ? "rounded-md" : "rounded-none"
      } 
       ${className}`}
    >
      {icon && (
        <img src={icon} alt="" className="w-3 h-3 object-contain" />
      )}
     <span>{text}</span> 
    </button>
  );
}
