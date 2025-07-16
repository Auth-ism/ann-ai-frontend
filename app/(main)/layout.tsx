'use client'
import {Sidebar} from "@/components/Sidebar";
import React, {useState} from "react";
import Topbar from "@/components/Topbar";


export default function ChatLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return(<>
        <div style={{
            width: "100%",
            height: "100%",
            position: "absolute",
        }}>
            <Sidebar open={sidebarOpen} onToggle={() => setSidebarOpen((prev) => !prev)} />
            <Topbar sidebarOpen={sidebarOpen} />
        </div>
        {children}
    </>)
}