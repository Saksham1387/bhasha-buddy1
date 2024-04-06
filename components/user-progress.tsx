import Link from "next/link";
import Image from "next/image";
import { InfinityIcon } from "lucide-react";

import { courses } from "@/db/schema";
import { Button } from "@/components/ui/button";

type Props = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({ 
  points, 
  hearts, 
  hasActiveSubscription
}: Props) => {
  return (
    <div className="flex">
      {/* <Link href="/courses">
        <Button variant="primary">
          <Image
          //@ts-ignore
            src={"/avatar.png"}
          //@ts-ignore
            alt={"Das"}
            className="rounded-md border"
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href="/shop">
        <Button variant="primary" className="text-orange-500">
          <Image src="/points.svg" height={28} width={28} alt="Points" className="mr-2" />
          {points}
        </Button>
      </Link> */}
      <Link href="/shop">
        <Button className="text-rose-500">
          <Image src="/heart.svg" height={22} width={22} alt="Hearts" className="mr-2" />
          {hasActiveSubscription 
            ? <InfinityIcon className="h-1 w-4 stroke-[3]" /> 
            : hearts
          }
        </Button>
      </Link>
    </div>
  );
};