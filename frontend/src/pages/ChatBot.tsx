import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import { RootState } from "../store/Store";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useUserProfile from "../hooks/useUserProfile";

type Message = {
    sender: "user" | "bot";
    text: string;
};

export default function ChatBot() {
    useUserProfile()
    const user = useSelector((state: RootState) => state.user.value)
    const [messages, setMessages] = useState<Message[]>([
        { sender: "bot", text: `Hello ${user?.name} How can I assist you today?` }
    ]);
    const [isThinking, setThinking] = useState(true)


    //user input
    const [input, setInput] = useState<string>("");
    const messagesEndRef = useRef<HTMLDivElement | null>(null);


    //get api bot response
    const GoogleGenAiResponse = async () => {
        if (!input.trim()) return; // check before doing anything

        const userMessage: Message = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput(""); // Clear input immediately
        setThinking(true); // Bot starts thinking immediately

        try {
            const response = await axios.post(`${API_BASE_URL}/api`, { text: input });

            const botMessage: Message = { sender: "bot", text: response.data.reply };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = { sender: "bot", text: "Oops! Something went wrong." };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setThinking(false); // Whether success or fail, bot stops thinking
        }
    };

    const handleSend = () => {
        GoogleGenAiResponse()
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);




    return (
        <div className="flex flex-col h-screen bg-[#121212] text-white relative  -z-1">
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
                {isThinking && (
                    <div className="w-11/12 mx-auto p-4 rounded-2xl bg-[#1e1e1e] animate-pulse " >
                        <div className="text-xs text-purple-400 mb-1">BOT</div>
                        <div className="text-base">Thinking...</div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Fixed input at bottom */}
            {
                user.isLoggedIn ?
                    <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="fixed bottom-0 left-0 w-full bg-[#121212] p-4 border-t border-gray-700 ">
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
                                type="submit"
                                className="ml-3 bg-purple-400 text-black px-5 py-3 rounded-full font-semibold hover:bg-purple-300 transition"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                    :
                    <>
                        <div className="card flex-col gap-2 border-2 h-40 w-86 text-center absolute md:left-4/12 top-96   flex justify-center items-center rounded-lg ">
                            <p className="text-secondary uppercase">Log In To Use AICHAT</p>
                            <Link className="border h-8 w-4/12 rounded-md cursor-pointer text-sm pt-1" to={'/sign-in'}>SIGN IN</Link>
                        </div>
                    </>
            }
        </div>
    );
}
