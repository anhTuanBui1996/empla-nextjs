import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import { getRecordsWhere } from "@/database/airtable/dao";

const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined, req) {
        try {
          const { username, password } = credentials as {
            username: string;
            password: string;
          };
          // Add logic here to look up the user from the credentials supplied
          const result = await getRecordsWhere(
            "Staff",
            `AND(OR(Account = '${username}', PersonalEmail = '${username}'), Password = '${password}')`,
            ["FullName", "RoleType", "Avatar"]
          ).all();

          if (result.length) {
            return result[0]._rawJson;
          } else {
            return null;
          }
        } catch (e) {
          return null;
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    signIn({ user, account, profile, email, credentials }) {
      return true;
    },
  },
  pages: {},
  // add more config options here
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
