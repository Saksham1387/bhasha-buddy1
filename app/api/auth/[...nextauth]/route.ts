import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'username', type: 'text', placeholder: '' },
          email: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        
        //@ts-ignore
        async authorize(credentials: any) {
            let user = await prisma.user.findFirst({
              where:{email: credentials.username}
            })
            if (!user) {
              user = await prisma.user.create({
                data: {
                  username: credentials.username,
                  email: credentials.username,
                  password: credentials.password, 
                }
              });
            } else if(user.password !== credentials.password) {
              return null
            }
            return {
              id: user.id,
              name: user.id,
              session: {
                id: user.id
              }
            };
        },
      })
  ],
  pages:{
    signIn: '/signin'
  },

  secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }