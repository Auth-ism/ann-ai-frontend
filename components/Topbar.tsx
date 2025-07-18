export default function Topbar() {
    return (
        <div className="flex justify-between items-center bg-[#d4cfba] px-4 py-2 shadow">
            <select className="bg-white px-3 py-1 rounded shadow">
                <option>ChatGPT</option>
            </select>
            <div className="flex gap-4">
                <button className="bg-[#e6e5e3] px-3 py-1 rounded shadow">SHARE THIS CHAT</button>
                <button className="bg-[#e6e5e3] px-3 py-1 rounded shadow flex items-center gap-1">
                    GO TO EXPLORER <span>🧭</span>
                </button>
            </div>
        </div>
    );
}
