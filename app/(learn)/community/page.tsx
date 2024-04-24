"use client";
import { Button } from "@/components/ui/button";
import { useSocket } from "@/context/SocketProvider";
import { useEffect, useState } from "react";
import Image from "next/image";

const Community = () => {
  const { sendMessage, messages, roomMessages, joinRoom } = useSocket();
  const [messagegloabal, setMessagGlobal] = useState("");
  const [messageroom, setMessagRoom] = useState("");
  const [room, setRoom] = useState("");

  const handleSendMessageGlobal = () => {
    if (messagegloabal.trim()) {
      sendMessage(messagegloabal.trim());
      setMessagGlobal("");
    }
  };

  const handleSendMessageRoom = () => {
    if (messageroom.trim()) {
      console.log(messageroom.trim(), room);
      sendMessage(messageroom.trim(), room);
      setMessagRoom("");
    }
  };

  const handleFormSubmitRoom = (e: any) => {
    e.preventDefault();
    handleSendMessageRoom();
  };

  const handleFormSubmitGlobal = (e: any) => {
    e.preventDefault();
    handleSendMessageGlobal();
  };

  console.log(roomMessages, room);
  const handleJoinRoom = () => {
    const roomName = prompt("Enter room name:");
    if (roomName) {
      joinRoom(roomName);
      setRoom(roomName);
    }
  };

  useEffect(() => {
    console.log(roomMessages, room);
  }, [messages, room]);
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex">
        <div className="flex-1">
          <h1 className="text-center text-3xl font-semibold text-neutral-600 mb-5 dark:text-zinc-300">
            Global Chat
          </h1>
          <ul className="overflow-auto p-2 space-y-2">
            {messages.map(({ message, avatar }, index) => (
              <div key={index} className="flex">
                <li className="bg-white p-2 rounded-lg shadow flex items-center dark:bg-slate-500">
                  <Image
                    src={avatar || "path/to/default/avatar.jpg"}
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
          <form onSubmit={handleFormSubmitGlobal}>
            <div className="flex items-center">
              <input
                type="text"
                value={messagegloabal}
                onChange={(e) => setMessagGlobal(e.target.value)}
                className="w-full md:w-1/3 p-3 bg-neutral-100 rounded-xl shadow-sm outline-none focus:border-purple-500 dark:bg-slate-800 transition-all"
                placeholder="Say Something..."
              />
              <Button
                variant="secondary"
                type="submit"
                className="ml-4 px-6 py-2"
              >
                Send
              </Button>
            </div>
          </form>
        </div>

        {/* room chat */}
        {room && (
          <div>
            <div className="flex-1">
              <h1 className="text-center text-3xl font-semibold text-neutral-600 mb-5 dark:text-zinc-300">
                Room Chat
              </h1>
              <ul className="overflow-auto p-2 space-y-2">
                {roomMessages.map(({ message, avatar }, index) => (
                  <div key={index} className="flex">
                    <li className="bg-white p-2 rounded-lg shadow flex items-center dark:bg-slate-500">
                      <Image
                        src={avatar || "path/to/default/avatar.jpg"}
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
              <form onSubmit={handleFormSubmitRoom}>
                <div className="flex items-center">
                  <input
                    type="text"
                    value={messageroom}
                    onChange={(e) => setMessagRoom(e.target.value)}
                    className="w-full md:w-1/3 p-3 bg-neutral-100 rounded-xl shadow-sm outline-none focus:border-purple-500 dark:bg-slate-800 transition-all"
                    placeholder="Say Something..."
                  />
                  <Button
                    variant="secondary"
                    type="submit"
                    className="ml-4 px-6 py-2"
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="primary"
          onClick={handleJoinRoom}
          className="px-6 py-2"
        >
          Join Room
        </Button>
      </div>
    </div>
  );
};

export default Community;
