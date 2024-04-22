"use client";
import Image from "next/image";
const profile = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl text-neutral-300 flex items-center justify-center font-bold mt-7">
          Your Profile
        </h1>
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="flex  bg-slate-500 w-[800px] flex-row rounded-xl">
          <div className="flex-col p-3">
            <Image
              src={"/avatar.gif"}
              alt=""
              width={250}
              height={250}
              className="p-3"
            ></Image>
            <p className="ml-6 text-2xl font-semibold text-neutral-200">
              Saksham Chaudhary
            </p>
            <p className="ml-20 text-neutral-300 text-lg">@saksham16</p>
          </div>

          <div className="flex flex-row items-center justify-center ml-[100px] mb-[200px]">
            <p className="text-2xl font-bold text-neutral-300">Followers</p>
            <p className="ml-24 text-2xl font-bold text-neutral-300">
              Following
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default profile;
