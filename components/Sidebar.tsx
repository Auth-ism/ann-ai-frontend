"use client"
import { Folder, User } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="bg-[#d4cfba] w-64 h-full flex flex-col justify-between p-4">
            <div>
                <h1 className="text-2xl font-bold mb-4">Ann-AI</h1>
                <div className="bg-[#e6e5e3] rounded px-2 py-1 mb-2">Computer Science</div>
                <div className="ml-2 space-y-1">
                    <div className="bg-[#cfc4a3] rounded px-2 py-1">About fuzzy relations</div>
                    <div className="bg-[#cfc4a3] rounded px-2 py-1">Why do i have to study…</div>
                </div>
                <div className="bg-[#3a6157] text-white rounded px-2 py-1 mt-4">Traveling Places</div>
                <div className="ml-4 space-y-1">
                    <div className="bg-[#e6dcb5] rounded px-2 py-1">Europe Historical…</div>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <User className="w-6 h-6" />
                <div>
                    <p className="text-sm">Zbinel Ege</p>
                    <p className="text-xs text-blue-600">bayram</p>
                </div>
            </div>
        </div>
    );
}
