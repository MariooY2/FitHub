import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { SupabaseAdapter } from "@auth/supabase-adapter"

const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
     
    }),
  ],
  /*adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY,
  }),*/
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
      //we could have used if auth.user exists return true else false
    },
  },


  pages: {
    signIn: "/login",
  },
  debug: true, // Enable detailed logging
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
