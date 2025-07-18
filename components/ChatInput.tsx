
export default function ChatInput() {
    return (
        <div className="bg-[#6f6864] p-2 flex gap-2 items-center rounded-t-lg">
            <button className="text-white text-xl">+</button>
            <input
                type="text"
                placeholder="Prompt here..."
                className="flex-grow px-4 py-2 rounded bg-[#c3bab4] text-black"
            />
            <button className="text-white text-xl">📨</button>
        </div>
    );
}
