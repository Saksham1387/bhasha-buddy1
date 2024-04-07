// "use client";
// import Image from "next/image";
// import { Loader } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { signIn, signOut } from "next-auth/react"
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
// import { useSession } from "next-auth/react";

// export default function Home() {
//   const { data: session, status } = useSession();
//   const router = useRouter();
//   console.log(session)
//   if(status === "authenticated"){
//     router.push("/learn")
//     return
//   }
//   return (
//     <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 ">
//       <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
//         <Image src="/hero-2.svg" className="mr-5" fill alt="Hero" />
//         {/* <Image src="/he_sitting_with_notebook.png" className="ml-[400px] mb-98" width={500} height={500} alt="Hero" /> */}
//       </div>
//       <div className="flex flex-col items-center gap-y-8">
//         {/* <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
//           Detect When You Stutter with BhashaBuddy!
//         </h1> */}

//         <div className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
//           <TextGenerateEffect words="Detect When You Stutter with BhashaBuddy!"></TextGenerateEffect>
//         </div>
//         <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          
            
          
//                 <Button size="lg" variant="secondary" className="w-full">
//                   Get Started
//                 </Button>
              
//                 <Button size="lg" variant="primaryOutline" className="bg-transparent dark:outline-violet-500 dark:hover:bg-indigo-400 dark:hover:outline-transparent hover:text-gray-900 w-full">
//                   I already have an account
//                 </Button>
              
//               {/* <Button size="lg" variant="secondary" className="w-full" asChild>
//                 <Link href="/stutter">Start Detecting</Link>
//               </Button> */}
            
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import Image from "next/image";
import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  console.log(session)
  if(status === "authenticated"){
    router.push("/learn")
    return
  }
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 ">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero-2.svg" className="mr-5" fill alt="Hero" />
        {/* <Image src="/he_sitting_with_notebook.png" className="ml-[400px] mb-98" width={500} height={500} alt="Hero" /> */}
      </div>
      <div className="flex flex-col items-center gap-y-8">
        {/* <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Detect When You Stutter with BhashaBuddy!
        </h1> */}

        <div className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          <TextGenerateEffect words="Detect When You Stutter with BhashaBuddy!"></TextGenerateEffect>
        </div>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          
            
          
                <Button size="lg" variant="secondary" className="w-full" onClick={() => signIn()}>
                  Get Started
                </Button>
              
                <Button onClick={() => signIn()} size="lg" variant="primaryOutline" className="bg-transparent dark:outline-violet-500 dark:hover:bg-indigo-400 dark:hover:outline-transparent hover:text-gray-900 w-full ">
                  I already have an account
                </Button>
              
              {/* <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/stutter">Start Detecting</Link>
              </Button> */}
            
        </div>
      </div>
    </div>
  );
}