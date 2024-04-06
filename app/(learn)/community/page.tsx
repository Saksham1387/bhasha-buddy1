"use client";
import { Button } from "@/components/ui/button";
import { useSocket } from "@/context/SocketProvider";
import { useState } from "react";
import Image from "next/image";

interface IMessage {
    message: string;
    avatar: string;
}

const Community = () => {
    const { sendMessage, messages } = useSocket(); 
    console.log(messages, sendMessage);// UseSocket already returns the correctly typed context
    const [message, setMessage] = useState("");
    
    const handleSendMessage = () => {
        if (message.trim()) {
            sendMessage(message.trim());
            setMessage(""); // Clear the message input after sending
        }
    };

    return (
        <div className="flex flex-col justify-between h-screen p-5 ">
            <h1 className="text-center text-3xl font-semibold text-neutral-600 mb-5">Global Chat</h1>
            
            <ul className="flex-1 overflow-auto p-2 space-y-2">
                {messages.map(({ message, avatar }, index) => (
                    <div key={index} className="flex">
                        <li className="bg-white p-2 rounded-lg shadow flex items-center">
                            <Image 
                                src={avatar || 'path/to/default/avatar.jpg'} // Fallback for missing avatar
                                alt="User Avatar" 
                                width={40} 
                                height={40}
                                className="rounded-full" 
                            />
                            <p className="ml-2 mr-5">{message}</p>
                        </li>
                    </div>
                ))}
            </ul>
            <div className="flex items-center">
                <input 
                    type="text" 
                    value={message} // Controlled input
                    onChange={(e) => setMessage(e.target.value)} 
                    className="w-full md:w-1/3 p-3 bg-neutral-100 rounded-xl shadow-sm outline-none focus:border-purple-500 transition-all"
                    placeholder="Say Something..." 
                />
                <Button 
                    variant="secondary"
                    onClick={handleSendMessage} // Using the handler function
                    className="ml-4 px-6 py-2"
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default Community;
