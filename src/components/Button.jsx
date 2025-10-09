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
    blue: "bg-[#00418c] text-white text-sm border border-[#00418c] hover:bg-[#c2deff] hover:text-[#00418c] ",
    white: "bg-white text-[#00418c] text-sm border border-[#00418c] hover:bg-[#00418c] hover:text-white ",
    lightblue: "bg-[#c2deff] text-[#00418c] text-sm border border-[#00418c] hover:bg-[#00418c] hover:text-white ",
  };
  const layout = icon ? "flex items-center justify-center gap-2" : "";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${layout} px-5 py-1  transition duration-200
                  disabled:opacity-50 disabled:cursor-not-allowed 
                  ${styles[variant]} ${rounded ? "rounded-md" : "rounded-none"} 
       ${className}`}
    >
      {typeof icon === "string" ? (
        <img src={icon} alt="" className="w-4 h-4 object-contain" />
      ) : (
        icon && <span className="flex items-center justify-center w-4 h-4">{icon}</span>
      )}
      <span>{text}</span>
    </button>
  );
}
