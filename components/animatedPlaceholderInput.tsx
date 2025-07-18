'use client'

import {HTMLInputTypeAttribute, useState} from "react";


export default function AnimatedPlaceholderInput({
  placeholder = "Type here...",
  value,
  onChange,
    type = "text",
}: {
  placeholder?: string;
  value: string;
  type: HTMLInputTypeAttribute | undefined,
  onChange: (value: string) => void;
}) {
    const [focus, setFocus] = useState(false);
  return (
      <div className='relative flex items-center w-full h-[20px] mb-[20px]'>
        <span style={{
            position: "absolute",
            left: focus || value ? "0" : "10px",
            top: focus || value ? "-10px" : "10px",
            fontSize: focus || value ? "12px" : "16px",
            color: focus ? "rgba(255,255,255,0.32)" : "#9ca3af",
            transition: "all 0.2s ease-in-out",
            pointerEvents: "none",
        }}>{placeholder}</span>
        <input
            type={type}
            className="w-full bg-transparent border-b-2 border-gray-300 focus:border-blue-500 outline-none transition-colors duration-300"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={()=> setFocus(true)}
            onBlur={()=> setFocus(false)}
        />
      </div>

  );
}