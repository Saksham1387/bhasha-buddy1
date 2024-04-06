"use client";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";


interface SocketProviderProps {
  children?: React.ReactNode;
}

interface Message {
  message: string;
  avatar: string;
}

interface ISocketContext {
  sendMessage: (msg: string) => void;
  messages: Message[];
}

const SocketContext = React.createContext<ISocketContext | null>(null);

export const useSocket = () => {
  const state = useContext(SocketContext);
  if (!state) throw new Error(`state is undefined`);
  return state;
};

export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  // const { user } = useUser();
  const defaultAvatar = 'http://path/to/default/avatar.jpg'; // Fallback to a default avatar if necessary
  const [socket, setSocket] = useState<Socket>();
  const [messages, setMessages] = useState<Message[]>([]);
    //@ts-ignore
  const sendMessage = useCallback((msg) => {
    if (socket && msg.trim().length > 0) {
      const avatar =  defaultAvatar;
      socket.emit('event:message', { message: msg, avatar: avatar });
    }
  }, [socket, ]);

  const onMessageRec = useCallback((msg: string) => {
    const data = JSON.parse(msg);
    if (data.message && data.avatar) {
      setMessages(prev => [...prev, data]);
    }
  }, []);

  useEffect(() => {
    const _socket = io('http://192.168.1.2:8000');
    _socket.on('message', onMessageRec);
    setSocket(_socket);

    return () => {
      _socket.disconnect();
      _socket.off('message', onMessageRec);
    };
  }, []);

  return (
    <SocketContext.Provider value={{ sendMessage, messages }}>
      {children}
    </SocketContext.Provider>
  );
};
