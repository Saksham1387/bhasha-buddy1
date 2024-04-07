// "use client";
// import { FeedWrapper } from "@/components/feed-wrapper";
// import { Header } from "./header";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import "./page.css";

// const LearnPage = () => {
//   const paragraphs = [
//     "The old lighthouse stood tall and proud against the backdrop of the stormy sea. Its beacon of light pierced through the darkness, guiding ships safely to shore. The sound of crashing waves echoed off its weathered walls, creating a haunting melody that echoed through the night.",
//     "As the sun set behind the mountains, the sky transformed into a canvas of vibrant colors. Shades of pink, orange, and purple painted the horizon, casting a warm glow over the landscape. It was a breathtaking sight, one that reminded Sarah of the beauty of nature and the simple joys of life",
//     "The bustling market was a feast for the senses. The smell of spices and freshly baked bread filled the air, while the sound of vendors hawking their goods created a lively symphony. Sarah wandered through the stalls, taking in the sights and sounds, feeling grateful for the abundance of life around her.",
//     " The old oak tree stood sentinel in the meadow, its branches reaching towards the sky. Under its shade, Sarah found refuge from the hot summer sun. She sat on the grass, listening to the rustling of leaves and the chirping of birds, feeling at peace in the embrace of nature.",
//     "The train rattled down the tracks, its wheels clacking against the steel. Sarah stared out the window, watching the world fly by in a blur of colors. She thought about the journey ahead, feeling a mix of excitement and apprehension. But as the train chugged along, she knew that the adventure was just beginning.",
//     " The city skyline glittered in the evening light, a testament to human ingenuity and creativity. Sarah marveled at the towering skyscrapers, each one a symbol of progress and ambition. As she walked through the bustling streets, she felt a sense of awe and wonder at the world around her.",
//     "The river meandered through the valley, its waters glistening in the sunlight. Sarah sat on the riverbank, dipping her toes in the cool water. She watched as the gentle current carried leaves downstream, lost in the tranquility of the moment.",
//     "The concert hall was alive with music, the notes dancing through the air. Sarah closed her eyes and let the melodies wash over her, feeling the music stir something deep within her soul. It was a moment of pure bliss, a reminder of the power of art to move and inspire.",
//     "The carnival was a riot of colors and sounds, a sensory overload of sights and smells. Sarah laughed as she rode the carousel, feeling like a child again. She savored the taste of cotton candy on her lips, relishing in the joy of the moment.",
//     "The forest was a symphony of life, with birds singing and animals scurrying about. Sarah hiked along the winding trail, breathing in the earthy scent of pine needles. She felt a deep connection to nature, grateful for its beauty and tranquility.",
//     "The ancient ruins stood silent and majestic, a testament to a bygone era. Sarah traced her fingers along the weathered stones, imagining the lives of those who had walked these paths centuries ago. She felt a sense of awe at the passage of time, humbled by the history that surrounded her.",
//     "The classroom buzzed with excitement as the children worked on their projects. Sarah smiled as she watched them collaborate and create, marveling at their creativity and enthusiasm. She knew that these young minds held the key to a brighter future.",
//     "The hospital corridor was quiet, the only sound the soft hum of machines. Sarah walked to her grandmother's room, feeling a mix of sadness and hope. She held her grandmother's hand, grateful for the time they had together, cherishing each moment.",
//     "The park was alive with activity, families picnicking and children playing. Sarah sat on a bench, watching the world go by. She felt a sense of peace and contentment, grateful for the simple joys of life.",
//     "The beach stretched out before her, the waves crashing against the shore. Sarah walked along the water's edge, feeling the sand between her toes. She breathed in the salty sea air, feeling a sense of freedom and possibility.",
//     " The mountain loomed large in the distance, its peak covered in snow. Sarah hiked along the trail, feeling the crisp mountain air fill her lungs. She marveled at the beauty of the landscape, feeling grateful for the opportunity to experience such wonders.",
//     "The café was cozy and inviting, the smell of freshly brewed coffee wafting through the air. Sarah sat at a table, sipping her latte and watching the world go by. She felt a sense of peace and contentment, grateful for the simple pleasures of life.",
//     "The garden was in full bloom, a riot of color and fragrance. Sarah walked among the flowers, breathing in their sweet scent. She felt a sense of peace and tranquility, grateful for the beauty of nature.",
//     " The library was a sanctuary of knowledge, with books lining the shelves from floor to ceiling. Sarah browsed the aisles, running her fingers over the spines of well-loved classics. She felt a sense of wonder at the wealth of information and stories contained within these walls.",
//     "The city park was a haven of greenery amidst the urban landscape. Sarah strolled along the winding paths, listening to the chirping of birds and the rustling of leaves. She felt a sense of calm and serenity, grateful for the oasis of nature in the midst of the city.",
//     "The art gallery was a feast for the eyes, with paintings and sculptures adorning the walls. Sarah wandered through the exhibits, marveling at the talent and creativity of the artists. She felt a sense of awe and inspiration, grateful for the beauty of art.",
//     " The train station was a hive of activity, with people coming and going. Sarah stood on the platform, watching the trains arrive and depart. She felt a sense of anticipation, eager for the journey ahead.",
//     "The forest was alive with the sound of birdsong, a symphony of nature. Sarah hiked along the trail, feeling the crunch of leaves beneath her feet. She breathed in the earthy scent of the forest, feeling a sense of peace and connection to the natural world.",
//     "The city skyline was a masterpiece of architecture, with skyscrapers reaching towards the sky. Sarah stood on the rooftop, taking in the breathtaking view. She felt a sense of awe at the ingenuity of mankind, grateful to be a part of such a vibrant and dynamic city.",
//     " The beach was a paradise of sun, sand, and surf. Sarah lounged on the shore, feeling the warmth of the sun on her skin. She listened to the sound of the waves, feeling a sense of peace and contentment wash over her.",
//     "The mountain trail was steep and challenging, but the view from the top was worth it. Sarah hiked to the summit, feeling a sense of accomplishment as she looked out at the breathtaking vista below. She felt a sense of awe at the beauty of the natural world, grateful for the opportunity to experience it firsthand.",
//     " The city square was bustling with activity, with street vendors selling their wares and performers entertaining the crowd. Sarah sat on a bench, soaking in the sights and sounds. She felt a sense of excitement and energy, grateful to be a part of the vibrant city life.",
//     "The river flowed gently through the valley, its waters sparkling in the sunlight. Sarah sat on the riverbank, dipping her feet in the cool water. She watched as fish darted beneath the surface, feeling a sense of peace and tranquility wash over her.",
//     "The concert hall was filled with music, the melodies washing over the audience like a wave. Sarah closed her eyes and let the music envelop her, feeling a sense of joy and euphoria. She felt grateful for the power of music to uplift and inspire.",
//     " The carnival was a riot of colors and sounds, with rides whirling and lights flashing. Sarah laughed as she rode the Ferris wheel, feeling the wind in her hair. She savored the taste of cotton candy, feeling a sense of pure happiness and delight.",
//     "The forest was a sanctuary of greenery and life. Sarah walked among the trees, feeling the cool shade and earthy scent surrounding her. She listened to the birdsong and rustling leaves, feeling a sense of peace and connection to the natural world.",
//     "The classroom was a hive of activity, with students working on projects and teachers instructing. Sarah sat at her desk, absorbed in her work. She felt a sense of purpose and determination, grateful for the opportunity to learn and grow.",
//     " The hospital was a place of healing and compassion. Sarah visited her friend, who was recovering from surgery. She held her friend's hand, offering words of comfort and support. She felt a sense of empathy and kindness, grateful for the gift of friendship.",
//   ];
//   const [currentParagraphIndex, setCurrentParagraphIndex] = useState(-1);
//   const [numStutter, setnumStutter] = useState(0);
//   const [coins, setCoins] = useState(100);
//   const [isspeaking, setIsspeaking] = useState(false);
//   const [audio, setAudio] = useState(null);

//   const HandleListen = async () => {
//     try {
//       const response = await fetch(
//         //@ts-ignore
//         process.env.NEXT_PUBLIC_URL_LISTEN, // Ensure this environment variable is correctly set to your server's endpoint
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             text: paragraphs[currentParagraphIndex], // Assuming paragraphs and currentParagraphIndex are defined and accessible
//           }),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`Network response was not ok: ${response.statusText}`);
//       }

//       // Assuming the server responds with an audio file directly
//       // Create an object URL from the response blob
//       const audioBlob = await response.blob();
//       const audioUrl = URL.createObjectURL(audioBlob);

//       // Create a new audio object and play it
//       const newAudio = new Audio(audioUrl);
//       //@ts-ignore
//       setAudio(newAudio); // Store the audio object in state
//       newAudio.play();
//       setIsspeaking(true);
//     } catch (error) {
//       console.error("Error during fetch operation:", error);
//     }
//   };

//   const selectNextParagraph = () => {
//     setnumStutter(0);
//     const nextIndex = (currentParagraphIndex + 1) % paragraphs.length;
//     setCurrentParagraphIndex(nextIndex);
//   };
//   const increaseStutter = () => {
//     setnumStutter(numStutter + 1);
  
//     setCoins(coins - 5);
//   };
//   const decreaseStutter = () => {
//     if (numStutter == 0) {
//       return;
//     }
//     setCoins(coins + 5);
//     setnumStutter(numStutter - 1);
//   };

//   // Initial render
//   if (currentParagraphIndex === -1) {
//     selectNextParagraph();
//   }

//   const handleStop = () => {
//     if (audio) {
//       //@ts-ignore
//       audio.pause();
//       setIsspeaking(false);
//     }
//   };

//   return (
//     <div>
//       <div className="felx felx-col-reverse gap-[48px] px-6">
//         <FeedWrapper>
//           <Header title="Assignment" coins={coins}></Header>
//         </FeedWrapper>
//         <div>
//           <div className="flex flex-row items-start gap-2">
//             <p className="border-neutral-400 p-5 border-3 border-2 shadow-lg rounded-2xl m-1 flex-1">
//               {paragraphs[currentParagraphIndex]}
//             </p>

//             <div className="flex flex-col items-center">
//               <Button className="rounded-full mb-3" onClick={HandleListen}>
//                 <Image
//                   src={"/speak.gif"}
//                   alt="speak"
//                   width={30}
//                   height={10}
//                   className="rounded-full"
//                 ></Image>
//               </Button>

//               {isspeaking && (
//                 <Button
//                   variant="danger"
//                   onClick={handleStop}
//                   className="rounded-full"
//                 >
//                   Stop
//                 </Button>
//               )}
//             </div>
//           </div>

//           <div>
//             <div className="ml-[1060px] mt-4 flex flex-row">
//               <Button
//                 variant="primary"
//                 onClick={selectNextParagraph}
//                 className=""
//               >
//                 Next
//               </Button>
//             </div>
//             <div className="flex flex-col mt-10 ml-36">
//               <p className="text-xl text-slate-500 font-semibold ml-[418px]">
//                 Stutter Counter
//               </p>
//               <div className=" ml-[400px] mt-1 flex flex-row">
//                 <Button onClick={increaseStutter} className="text-xl">
//                   {" "}
//                   +{" "}
//                 </Button>
//                 <p className="px-9 mt-2 text-xl font-bold text-slate-500">
//                   {numStutter}
//                 </p>
//                 <Button onClick={decreaseStutter} className="text-xl">
//                   {" "}
//                   -{" "}
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LearnPage;


"use client";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Header } from "./header";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "./page.css";

const LearnPage = () => {
  const paragraphs = [
    "The old lighthouse stood tall and proud against the backdrop of the stormy sea. Its beacon of light pierced through the darkness, guiding ships safely to shore. The sound of crashing waves echoed off its weathered walls, creating a haunting melody that echoed through the night.",
    "As the sun set behind the mountains, the sky transformed into a canvas of vibrant colors. Shades of pink, orange, and purple painted the horizon, casting a warm glow over the landscape. It was a breathtaking sight, one that reminded Sarah of the beauty of nature and the simple joys of life",
    "The bustling market was a feast for the senses. The smell of spices and freshly baked bread filled the air, while the sound of vendors hawking their goods created a lively symphony. Sarah wandered through the stalls, taking in the sights and sounds, feeling grateful for the abundance of life around her.",
    " The old oak tree stood sentinel in the meadow, its branches reaching towards the sky. Under its shade, Sarah found refuge from the hot summer sun. She sat on the grass, listening to the rustling of leaves and the chirping of birds, feeling at peace in the embrace of nature.",
    "The train rattled down the tracks, its wheels clacking against the steel. Sarah stared out the window, watching the world fly by in a blur of colors. She thought about the journey ahead, feeling a mix of excitement and apprehension. But as the train chugged along, she knew that the adventure was just beginning.",
    " The city skyline glittered in the evening light, a testament to human ingenuity and creativity. Sarah marveled at the towering skyscrapers, each one a symbol of progress and ambition. As she walked through the bustling streets, she felt a sense of awe and wonder at the world around her.",
    "The river meandered through the valley, its waters glistening in the sunlight. Sarah sat on the riverbank, dipping her toes in the cool water. She watched as the gentle current carried leaves downstream, lost in the tranquility of the moment.",
    "The concert hall was alive with music, the notes dancing through the air. Sarah closed her eyes and let the melodies wash over her, feeling the music stir something deep within her soul. It was a moment of pure bliss, a reminder of the power of art to move and inspire.",
    "The carnival was a riot of colors and sounds, a sensory overload of sights and smells. Sarah laughed as she rode the carousel, feeling like a child again. She savored the taste of cotton candy on her lips, relishing in the joy of the moment.",
    "The forest was a symphony of life, with birds singing and animals scurrying about. Sarah hiked along the winding trail, breathing in the earthy scent of pine needles. She felt a deep connection to nature, grateful for its beauty and tranquility.",
    "The ancient ruins stood silent and majestic, a testament to a bygone era. Sarah traced her fingers along the weathered stones, imagining the lives of those who had walked these paths centuries ago. She felt a sense of awe at the passage of time, humbled by the history that surrounded her.",
    "The classroom buzzed with excitement as the children worked on their projects. Sarah smiled as she watched them collaborate and create, marveling at their creativity and enthusiasm. She knew that these young minds held the key to a brighter future.",
    "The hospital corridor was quiet, the only sound the soft hum of machines. Sarah walked to her grandmother's room, feeling a mix of sadness and hope. She held her grandmother's hand, grateful for the time they had together, cherishing each moment.",
    "The park was alive with activity, families picnicking and children playing. Sarah sat on a bench, watching the world go by. She felt a sense of peace and contentment, grateful for the simple joys of life.",
    "The beach stretched out before her, the waves crashing against the shore. Sarah walked along the water's edge, feeling the sand between her toes. She breathed in the salty sea air, feeling a sense of freedom and possibility.",
    " The mountain loomed large in the distance, its peak covered in snow. Sarah hiked along the trail, feeling the crisp mountain air fill her lungs. She marveled at the beauty of the landscape, feeling grateful for the opportunity to experience such wonders.",
    "The café was cozy and inviting, the smell of freshly brewed coffee wafting through the air. Sarah sat at a table, sipping her latte and watching the world go by. She felt a sense of peace and contentment, grateful for the simple pleasures of life.",
    "The garden was in full bloom, a riot of color and fragrance. Sarah walked among the flowers, breathing in their sweet scent. She felt a sense of peace and tranquility, grateful for the beauty of nature.",
    " The library was a sanctuary of knowledge, with books lining the shelves from floor to ceiling. Sarah browsed the aisles, running her fingers over the spines of well-loved classics. She felt a sense of wonder at the wealth of information and stories contained within these walls.",
    "The city park was a haven of greenery amidst the urban landscape. Sarah strolled along the winding paths, listening to the chirping of birds and the rustling of leaves. She felt a sense of calm and serenity, grateful for the oasis of nature in the midst of the city.",
    "The art gallery was a feast for the eyes, with paintings and sculptures adorning the walls. Sarah wandered through the exhibits, marveling at the talent and creativity of the artists. She felt a sense of awe and inspiration, grateful for the beauty of art.",
    " The train station was a hive of activity, with people coming and going. Sarah stood on the platform, watching the trains arrive and depart. She felt a sense of anticipation, eager for the journey ahead.",
    "The forest was alive with the sound of birdsong, a symphony of nature. Sarah hiked along the trail, feeling the crunch of leaves beneath her feet. She breathed in the earthy scent of the forest, feeling a sense of peace and connection to the natural world.",
    "The city skyline was a masterpiece of architecture, with skyscrapers reaching towards the sky. Sarah stood on the rooftop, taking in the breathtaking view. She felt a sense of awe at the ingenuity of mankind, grateful to be a part of such a vibrant and dynamic city.",
    " The beach was a paradise of sun, sand, and surf. Sarah lounged on the shore, feeling the warmth of the sun on her skin. She listened to the sound of the waves, feeling a sense of peace and contentment wash over her.",
    "The mountain trail was steep and challenging, but the view from the top was worth it. Sarah hiked to the summit, feeling a sense of accomplishment as she looked out at the breathtaking vista below. She felt a sense of awe at the beauty of the natural world, grateful for the opportunity to experience it firsthand.",
    " The city square was bustling with activity, with street vendors selling their wares and performers entertaining the crowd. Sarah sat on a bench, soaking in the sights and sounds. She felt a sense of excitement and energy, grateful to be a part of the vibrant city life.",
    "The river flowed gently through the valley, its waters sparkling in the sunlight. Sarah sat on the riverbank, dipping her feet in the cool water. She watched as fish darted beneath the surface, feeling a sense of peace and tranquility wash over her.",
    "The concert hall was filled with music, the melodies washing over the audience like a wave. Sarah closed her eyes and let the music envelop her, feeling a sense of joy and euphoria. She felt grateful for the power of music to uplift and inspire.",
    " The carnival was a riot of colors and sounds, with rides whirling and lights flashing. Sarah laughed as she rode the Ferris wheel, feeling the wind in her hair. She savored the taste of cotton candy, feeling a sense of pure happiness and delight.",
    "The forest was a sanctuary of greenery and life. Sarah walked among the trees, feeling the cool shade and earthy scent surrounding her. She listened to the birdsong and rustling leaves, feeling a sense of peace and connection to the natural world.",
    "The classroom was a hive of activity, with students working on projects and teachers instructing. Sarah sat at her desk, absorbed in her work. She felt a sense of purpose and determination, grateful for the opportunity to learn and grow.",
    " The hospital was a place of healing and compassion. Sarah visited her friend, who was recovering from surgery. She held her friend's hand, offering words of comfort and support. She felt a sense of empathy and kindness, grateful for the gift of friendship.",
  ];
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(-1);
  const [numStutter, setnumStutter] = useState(0);
  const [coins, setCoins] = useState(100);
  const [isspeaking, setIsspeaking] = useState(false);
  const [audio, setAudio] = useState(null);

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
    setnumStutter(numStutter + 1);
  
    setCoins(coins - 5);
  };
  const decreaseStutter = () => {
    if (numStutter == 0) {
      return;
    }
    setCoins(coins + 5);
    setnumStutter(numStutter - 1);
  };

  // Initial render
  if (currentParagraphIndex === -1) {
    selectNextParagraph();
  }

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
            <p className="border-neutral-400 p-5 border-3 border-2 shadow-lg rounded-2xl m-1 flex-1">
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
            <div className="flex flex-col mt-10 ml-36">
              <p className="text-xl text-slate-500 font-semibold ml-[418px] dark:text-zinc-300">
                Stutter Counter
              </p>
              <div className=" ml-[400px] mt-1 flex flex-row">
                <Button onClick={increaseStutter} className="text-xl dark:bg-purple-950 dark:text-zinc-300">
                  {" "}
                  +{" "}
                </Button>
                <p className="px-9 mt-2 text-xl font-bold text-slate-500 dark:text-zinc-300">
                  {numStutter}
                </p>
                <Button onClick={decreaseStutter} className="text-xl dark:bg-purple-950 dark:text-zinc-300">
                  {" "}
                  -{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LearnPage;