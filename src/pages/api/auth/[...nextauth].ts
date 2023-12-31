import NextAuth from "next-auth";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import DiscordProvider from "next-auth/providers/discord";
import TwitterProvider from "next-auth/providers/twitter";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({
        clientId: process.env.FACEBOOK_ID as string ,
        clientSecret: process.env.FACEBOOK_SECRET as string
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_ID as string ,
        clientSecret: process.env.GOOGLE_SECRET as string
    }),

    GitHubProvider({
      clientId: process.env.GITHUB_ID as string ,
      clientSecret: process.env.GITHUB_SECRET as string 
    }), 
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID as string,
      clientSecret: process.env.DISCORD_CLIENT_SECRET as string
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string
    })
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
}
export default NextAuth(authOptions)