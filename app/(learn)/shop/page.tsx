import Image from "next/image";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Button } from "@/components/ui/button";

// import { getUserProgress, getUserSubscription } from "@/db/queries";

const ShopPage = async () => {
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop-inside.svg" alt="Shop" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">
            Shop
          </h1>
          <p className="text-muted-foreground text-center text-lg mb-6">
            Spend your points on cool stuff.
          </p>
          {/* <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          /> */}
          <div className="flex flex-row items-center justify-center gap-[100px] mt-[80px]">
            

            <div className="border-neutral-400  rounded-xl px-20 py-10 shadow-xl shadow-yellow-50">
              <Image
                src={"/power-up.gif"}
                alt="power-up"
                width={100}
                height={100}
                className="ml-3 rounded-full"
              ></Image>
              <p className="text-center text-neutral-600 font-bold text-lg">
                Booster
              </p>
              <Button className="ml-4 mt-5">Buy Now</Button>
            </div>

            <div className="border-neutral-400  rounded-xl px-20 py-10 shadow-xl shadow-yellow-50">
              <Image
                src={"/mercendise.gif"}
                alt="power-up"
                width={100}
                height={100}
                className="ml-3 rounded-full mb-2"
              ></Image>
              <p className="text-center text-neutral-600 font-bold text-lg">
                Our Merchandise
              </p>
              <Button className="ml-4 mt-5">Buy Now</Button>
            </div>
          </div>
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;