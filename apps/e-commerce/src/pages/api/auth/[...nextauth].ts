import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextApiHandler } from "next";
import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

import { prisma } from "@app/database";
import { getEnv } from "@app/env";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: getEnv("GOOGLE_ID"),
      clientSecret: getEnv("GOOGLE_SECRET"),
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: getEnv("NEXTAUTH_SECRET"),
  pages: {
    signIn: "/auth/signIn",
  },
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, authOptions);
export default authHandler;
