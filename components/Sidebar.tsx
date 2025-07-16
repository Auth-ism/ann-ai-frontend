import React from "react";

type SidebarProps = {
  open: boolean;
  onToggle: () => void;
};

export const Sidebar = ({ open, onToggle }: SidebarProps): React.ReactElement => {
  return (
    <div style={{ background: "linear-gradient(135deg, #1E2F41 0%,rgb(49, 73, 93) 100%)" }}>

    </div>
  );
};
