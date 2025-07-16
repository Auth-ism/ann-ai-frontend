/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Buttons } from "../Buttons";

export const HeaderNavigation = ({
  showSearchField = true,
  
  
}) => {
  return (
    <div className="flex flex-col w-[1440px] items-start relative bg-1-theme-bkg-def border-b-[1.5px] [border-bottom-style:solid] border-1-theme-border-def">
      <div>
        <Buttons
          className="!flex-[0_0_auto]"
          hasText={false}
          size="m"
          theme="minimal"
          type="secondry"
        />
       
      </div>
    </div>
  );
};
