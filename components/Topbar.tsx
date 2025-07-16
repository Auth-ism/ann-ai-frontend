import React from "react";

type TopbarProps = {
  sidebarOpen: boolean;
};

const Topbar = ({ sidebarOpen }: TopbarProps) => {
  return (
    <div
      className={`fixed top-0 left-0 h-16 bg-[#252933] flex items-center px-6 text-white font-bold text-xl shadow z-50 transition-all duration-300`}
      style={{ width: `calc(100vw - ${sidebarOpen ? '16rem' : '4rem'})`, right: sidebarOpen ? '16rem' : '4rem' }}
    >
      Ann AI
    </div>
  );
};

export default Topbar;
