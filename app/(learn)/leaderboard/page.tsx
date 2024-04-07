// import Image from "next/image";
// import { FeedWrapper } from "@/components/feed-wrapper";
// import { Separator } from "@/components/ui/separator";
// import { Avatar, AvatarImage } from "@/components/ui/avatar";

// const LearderboardPage = async () => {
//   return (
//     <div className="flex flex-row-reverse gap-[48px] px-6">
//       <FeedWrapper>
//         <div className="w-full flex flex-col items-center">
//           <Image
//             src="/leaderboard.svg"
//             alt="Leaderboard"
//             height={90}
//             width={90}
//           />
//           <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
//             LeaderBoard
//           </h1>
//           <p className="text-muted-foreground text-center text-lg mb-6">
//             See Where You Stand Among Other
//           </p>
//           <Separator className="mb-4 h-0.5 rounded-full"></Separator>
//           <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
//             <p className="font-bold text-lime-700 mr-4">{2}</p>
//             <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
//               <AvatarImage
//                 className="object-cover"
//                 src={"avatar.gif"}
//               ></AvatarImage>
//             </Avatar>
//             <p className="font-bold text-neutral-800 flex-1">Parth</p>
//             <p className="text-muted-foreground">200 XP</p>
//           </div>
//           <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
//             <p className="font-bold text-lime-700 mr-4">{3}</p>
//             <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
//               <AvatarImage
//                 className="object-cover"
//                 src={"gamer.png"}
//               ></AvatarImage>
//             </Avatar>
//             <p className="font-bold text-neutral-800 flex-1">Naman</p>
//             <p className="text-muted-foreground">132 XP</p>
//           </div>
//           <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
//             <p className="font-bold text-lime-700 mr-4">{4}</p>
//             <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
//               <AvatarImage
//                 className="object-cover"
//                 src={"avatar.gif"}
//               ></AvatarImage>
//             </Avatar>
//             <p className="font-bold text-neutral-800 flex-1">Divyam</p>
//             <p className="text-muted-foreground">120 XP</p>
//           </div>
//         </div>
//       </FeedWrapper>
//     </div>
//   );
// };

// export default LearderboardPage;

import Image from "next/image";
import { FeedWrapper } from "@/components/feed-wrapper";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const LearderboardPage = async () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 dark:text-zinc-300">
            LeaderBoard
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6 dark:text-zinc-300">
            See Where You Stand Among Others
          </p>
          <Separator className="mb-4 h-0.5 rounded-full"></Separator>
          <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
            <p className="font-bold text-lime-700 mr-4 dark:text-lime-200">{1}</p>
            <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
              <AvatarImage
                className="object-cover"
                src={"avatar.gif"}
              ></AvatarImage>
            </Avatar>
            <p className="font-bold text-neutral-800 flex-1 dark:text-zinc-300">Parth</p>
            <p className="text-muted-foreground dark:text-zinc-300">200 XP</p>
          </div>
          <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
            <p className="font-bold text-lime-700 mr-4 dark:text-lime-200">{2}</p>
            <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
              <AvatarImage
                className="object-cover"
                src={"gamer.png"}
              ></AvatarImage>
            </Avatar>
            <p className="font-bold text-neutral-800 flex-1 dark:text-zinc-300">Naman</p>
            <p className="text-muted-foreground dark:text-zinc-300">132 XP</p>
          </div>
          <div className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50">
            <p className="font-bold text-lime-700 mr-4 dark:text-lime-200">{3}</p>
            <Avatar className="border bg-green-500 h-12 w-12 ml-3 mr-6">
              <AvatarImage
                className="object-cover"
                src={"avatar.gif"}
              ></AvatarImage>
            </Avatar>
            <p className="font-bold text-neutral-800 flex-1 dark:text-zinc-300">Saksham</p>
            <p className="text-muted-foreground dark:text-zinc-300">120 XP</p>
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default LearderboardPage;