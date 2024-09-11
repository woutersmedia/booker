import { getServerSession, NextAuthOptions } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";

const { AUTH0_ID, AUTH0_SECRET, AUTH0_ISSUER } = process.env;

export const options: NextAuthOptions = {
  providers: [
    Auth0Provider({
      clientId: AUTH0_ID as string,
      clientSecret: AUTH0_SECRET as string,
      issuer: `https://${AUTH0_ISSUER}`,
      idToken: true,
    }),
  ],
  debug: process.env.NODE_ENV !== "production",
  callbacks: {
    session({ session, token }) {
      return {
        ...session,
        user: {
          id: token.id,
          accessToken: token.accessToken,
          ...session.user,
        },
      };
    },
  },
  theme: {
    colorScheme: "dark",
    buttonText: "Sign in",
  },
};

export const getSession = () => getServerSession(options);
