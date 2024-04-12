
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { useRef } from 'react'

import { makeStore, AppStore } from '../lib/store'

import  Provider  from './StoreProvider';
import {SocketProvider} from "../context/SocketProvider"
import { Socket } from "socket.io-client";
import { Providers } from "./providers";
import { ThemeProvider } from "./theme-provider";
import store from "@/store";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhasha Buddy",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    
      <html lang="en">
       <Provider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Providers>
        <SocketProvider>
        <body className={font.className}>{children}</body>
        </SocketProvider>
        </Providers>
        </ThemeProvider>
        </Provider>
      </html>
    
   
  );
}
