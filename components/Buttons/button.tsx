/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Buttons = ({
  textContent = "Button",
  hasRightIcon = false,
  hasText = true,
  hasLeftIcon = false,
  item = false,
  item1 = false,
  item2 = false,
  item3 = true,
  item4 = true,
  item5 = true,
  item6 = true,
  item7 = true,
  
}) => {
  return (
    <button
      
    >
      {hasText && (
        <div className="relative w-fit mt-[-1.00px] font-14-med font-[number:var(--14-med-font-weight)] text-1-theme-text-defff text-[length:var(--14-med-font-size)] tracking-[var(--14-med-letter-spacing)] leading-[var(--14-med-line-height)] whitespace-nowrap [font-style:var(--14-med-font-style)]">
          {textContent}
        </div>
      )}
    </button>
  );
};
