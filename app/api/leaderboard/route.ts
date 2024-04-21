import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();
export async function GET(req: NextApiRequest, res: NextApiResponse) {
    try {
        const users = await prisma.user.findMany({
            select:{
                username:true,
                id:true,
                email:true,
                xp:true
            }
        });
        return NextResponse.json({ users }, { status: 200 });
    } catch (error) {
        console.error('Error fetching user data:', error);
        return  NextResponse.json({ error: 'Internal server error3'});
    }
}

 