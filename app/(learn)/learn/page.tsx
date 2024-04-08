"use client";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./page.css";
import SpeechToText from "../detect/page";
import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { decrement, increment } from "@/counterSlice";

// import {RootState} from '@/store';
const LearnPage = () => {
  const count = useSelector((state:RootState) => state.counter.count);
  const count2 = useSelector((state:RootState) => state.counter.count2);
  console.log(count)
  const paragraphs = ["The sun rises every morning, bringing warmth and light.",
  "Birds chirp happily as they greet the new day ahead.",
  "Flowers bloom, displaying vibrant colors in the garden.",
  "A gentle breeze whispers through the trees, calming the soul.",
  "Children laugh and play, enjoying the freedom of youth.",
  "The world is full of beauty, waiting to be discovered.",
  "Music fills the air, creating a soothing atmosphere around us.",
  "Books open doors to new worlds and endless possibilities.",
  "Love is a powerful force, binding hearts and souls together.",
  "Friendship is a treasure, enriching our lives with joy.",
  "Dreams inspire us to reach for the stars, never giving up.",
  "Challenges make us stronger, teaching us valuable lessons in life.",
  "Kindness is a gift, spreading warmth and happiness to all.",
  "Memories hold precious moments, cherishing them forever in our hearts.",
  "Hope shines brightly, guiding us through the darkest of times.",
  "Courage is found within, enabling us to face our fears.",
  "Faith gives us strength, believing in a brighter tomorrow.",
  "Nature's beauty is a masterpiece, painting the world with wonder.",
  "Stars twinkle in the night sky, reminding us of endless possibilities.",
  "Rain cleanses the earth, rejuvenating life with its touch.",
  "The moon watches over us, a silent guardian in the sky.",
  "Laughter is contagious, spreading joy wherever it goes.",
  "Family is a bond, uniting us with love and support.",
  "Knowledge is power, empowering us to change the world.",
  "Time heals all wounds, bringing comfort and peace.",
  "Success is earned through hard work and determination.",
  "Forgiveness sets us free, releasing the weight of the past.",
  "Imagination is limitless, creating worlds beyond our wildest dreams.",
  "Gratitude fills our hearts, appreciating the beauty of life.",
  "Life is a journey, filled with moments to cherish forever."];
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(-1);
  const [numStutter, setnumStutter] = useState(0);
  const [coins, setCoins] = useState(95);
  const [isspeaking, setIsspeaking] = useState(false);
  const [audio, setAudio] = useState(null);
  // const count = useSelector((state: RootState) => state.count);
  const HandleListen = async () => {
    try {
      const response = await fetch(
        //@ts-ignore
        process.env.NEXT_PUBLIC_URL_LISTEN, // Ensure this environment variable is correctly set to your server's endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: paragraphs[currentParagraphIndex], // Assuming paragraphs and currentParagraphIndex are defined and accessible
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      // Assuming the server responds with an audio file directly
      // Create an object URL from the response blob
      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      // Create a new audio object and play it
      const newAudio = new Audio(audioUrl);
      //@ts-ignore
      setAudio(newAudio); // Store the audio object in state
      newAudio.play();
      setIsspeaking(true);
    } catch (error) {
      console.error("Error during fetch operation:", error);
    }
  };

  const selectNextParagraph = () => {
    setnumStutter(0);
    const nextIndex = (currentParagraphIndex + 1) % paragraphs.length;
    setCurrentParagraphIndex(nextIndex);
  };
  const increaseStutter = () => {
    setCoins(coins - 2);
  };
  const decreaseStutter = () => { 
    setCoins(coins + 5);
    
  };

  // Initial render
  if (currentParagraphIndex === -1) {
    selectNextParagraph();
  }
  
useEffect(() => {
  increaseStutter()
}, [count]);

useEffect(() => {
  decreaseStutter()
}, [count2]);
  

  const handleStop = () => {
    if (audio) {
      //@ts-ignore
      audio.pause();
      setIsspeaking(false);
    }
  };

  return (
    <div>
      <div className="felx felx-col-reverse gap-[48px] px-6">
        <FeedWrapper>
          <Header title="Assignment" coins={coins}></Header>
        </FeedWrapper>
        <div>
          <div className="flex flex-row items-start gap-2">
            <p className="border-neutral-400 p-5 border-3 border-2 shadow-lg rounded-2xl m-1 flex-1 text-center">
              {paragraphs[currentParagraphIndex]}
            </p>

            <div className="flex flex-col items-center">
              <Button className="rounded-full mb-3 dark:bg-purple-950" onClick={HandleListen}>
                <Image
                  src={"/speak.gif"}
                  alt="speak"
                  width={30}
                  height={10}
                  className="rounded-full"
                ></Image>
              </Button>

              {isspeaking && (
                <Button
                  variant="danger"
                  onClick={handleStop}
                  className="rounded-full"
                >
                  Stop
                </Button>
              )}
            </div>
          </div>

          <div>
            <div className="ml-[1060px] mt-4 flex flex-row">
              <Button
                variant="primary"
                onClick={selectNextParagraph}
                className=""
              >
                Next
              </Button>
            </div>
          </div>

          <SpeechToText></SpeechToText>
        </div>
      </div>
    </div>
  );
};
export default LearnPage;