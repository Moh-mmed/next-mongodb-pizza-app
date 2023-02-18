import NextAuth from "next-auth/next";
import GitHubProvider from "next-auth/providers/github";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "../../../lib/mongodb";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  // adapter: MongoDBAdapter(clientPromise),
  // database: process.env.DB_URL,
  // session: {
  //   jwt:true
  // },
  // jwt: {
  //   secret: 'kodkqdsei'
  // },
  // callbacks: {
  //   async jwt(token, user) {
  //     if (user) {
  //       token.id = user.id
  //     }
  //     return token
  //   },
  //   async session(session, token) {
  //     session.user.id = token.id
  //     return session
  //   }
  // }
  // callbacks: {
  //   async signIn({ user, account, profile, email, credentials }) {
  //     return true;
  //   },
  //   async redirect({ url, baseUrl }) {
  //     return baseUrl;
  //   },
  //   async session({ session, user, token }) {
  //     // session.user.id = user.id;
  //     return session;
  //   },
  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     return token;
  //   },
  // },
  pages: {
    signIn: "/admin/signin",
    // signOut: "/auth/signout",
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // (used for check email message)
    // newUser: "/auth/new-user", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
