import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import ChatArea from "@/components/ChatArea";

export const metadata = {
    title: 'Ann-AI',
    description: 'AI Chat UI',
};

export default function ChatPage() {
    return (
        <div className="h-screen flex flex-col">
            <Topbar />
            <div className="flex flex-1">
                <Sidebar />
                <ChatArea />
            </div>
        </div>
    );
}
