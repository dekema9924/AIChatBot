import { useState, useRef, useEffect } from "react";

type Message = {
    sender: "user" | "bot";
    text: string;
};

export default function ChatBot() {
    const [messages, setMessages] = useState<Message[]>([
        { sender: "bot", text: "Hello! How can I assist you today?" }
    ]);
    const [input, setInput] = useState<string>("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage: Message = { sender: "user", text: input };
        const botMessage: Message = { sender: "bot", text: generateBotResponse(input) };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    const generateBotResponse = (userInput: string): string => {
        if (userInput.toLowerCase().includes("cybrs")) return "CYBRS is a cybersecurity solution.";
        return "Thanks for your message! I'll get back to you.";
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex flex-col h-screen bg-[#121212] text-white">
            {/* Scrollable chat area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 mb-24">
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`w-11/12 mx-auto p-4 rounded-2xl ${msg.sender === "user" ? "bg-[#2e2e2e]" : "bg-[#1e1e1e]"
                            }`}
                    >
                        <div className="text-xs text-purple-400 mb-1">
                            {msg.sender === "user" ? "YOU" : "BOT"}
                        </div>
                        <div className="text-base">{msg.text}</div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Fixed input at bottom */}
            <div className="fixed bottom-0 left-0 w-full bg-[#121212] p-4 border-t border-gray-700">
                <div className="flex w-11/12 mx-auto">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-grow p-3 rounded-full bg-[#2a2a2a] text-white placeholder-gray-400 outline-none"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="ml-3 bg-purple-400 text-black px-5 py-3 rounded-full font-semibold hover:bg-purple-300 transition"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
}
