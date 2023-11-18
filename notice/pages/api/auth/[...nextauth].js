import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { connectDB } from "@/util/database";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.REACT_APP_GITHUB_CLIENT_ID,
      clientSecret: process.env.REACT_APP_GITHUB_CLIENT_PASSWORD,
    }),
    
  ],
  secret : 'qwer1234',
  adapter : MongoDBAdapter(connectDB),
};
export default NextAuth(authOptions);