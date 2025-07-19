"use client";

import React, { useState } from "react";

interface PromptInputProps {
    onSend: (message: string) => void;
}

const PromptInput: React.FC<PromptInputProps> = ({ onSend }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmed = input.trim();
        if (!trimmed) return;
        onSend(trimmed);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex border-t p-2 bg-white">
            <input
                type="text"
                placeholder="Bir şey yazın..."
                className="flex-1 p-2 rounded border border-gray-300 text-sm"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm"
            >
                Gönder
            </button>
        </form>
    );
};

export default PromptInput;
