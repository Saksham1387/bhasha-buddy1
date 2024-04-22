import { prisma } from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(request: Request, res: NextApiResponse) {
    try {
      const res = await request.json();
      const query = res.query;
      
      const searchResults = await prisma.user.findMany({
        where: {
          username: {
            contains: query, // Use contains for partial matches
          },
        },
      });
      const formattedResults = searchResults.map(result => ({
        id: result.id,
        username: result.username,
        email: result.email,
        // Add other necessary fields here
      }));
  
      //@ts-ignore
      console.log(NextResponse.json({formattedResults}));
      //@ts-ignore
      return NextResponse.json(formattedResults);
    } catch (error) {
      console.error("Error updating user XP:", error);
      return NextResponse.json({ error: "Internal server error" });
    }
}