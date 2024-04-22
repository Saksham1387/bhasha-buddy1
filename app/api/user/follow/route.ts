import { prisma } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";

export async function POST(request: Request, res: NextApiResponse) {
      try{
        const session = await getServerSession();
        //@ts-ignore
        const userIdC = session.user.name;

        const res = await request.json();
        const userIdF = res.userId;

        const userToFollow = await prisma.user.findUnique({
            where: { id: userIdF },
          });
        if (!userToFollow) {
            //@ts-ignore
            return NextResponse.json({status: 404},{error:"User not found"});
        }
        const currentUser = await prisma.user.findUnique({
            //@ts-ignore
            where: { id: userIdC },
        });
        if (!currentUser) {
            //@ts-ignore
            return NextResponse.json({status: 404},{error:" Current User not found"});
        }
        if(currentUser.id === userToFollow.id){
            return NextResponse.json({ error: 'Bad Request', message: 'User cannot follow themselves' });
        }
        const existingFollow = await prisma.userFollowers.findFirst({
            where: {
              userId: currentUser.id,
              followerId: userToFollow.id,
            },
        });
        if (existingFollow) {
            return NextResponse.json({ error: 'Bad Request', message: 'User is already following this user' });
        }
        await prisma.userFollowers.create({
            data: {
              user: { connect: { id: currentUser.id } },
              follower: { connect: { id: userToFollow.id } },
            },
        });
        return NextResponse.json({ message: 'User followed successfully' },{status: 200});
      }catch(e){
        console.error('Error following user:', e);
        return NextResponse.json({ error: 'Internal Server Error', message: 'An error occurred while processing the request' });
      }
}

export async function GET(request: Request, res: NextApiResponse) {
    try{
        const session = await getServerSession();
        //@ts-ignore
        const userId = session.user.name;
        const following = await prisma.userFollowers.count({
            //@ts-ignore
            where: { userId: userId },
        });
        const followers = await prisma.userFollowers.count({
            where: { followerId: Number(userId) },
        });
        return NextResponse.json({ followersCount:followers, followingCount:following },{status: 200});
    }catch(e){
        console.error('Error getting followers:', e);
        return NextResponse.json({ error: 'Internal Server Error', message: 'An error occurred while processing the request' });
    }

}