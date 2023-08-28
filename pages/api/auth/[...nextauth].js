import { getByEmail, verifyPassword } from "@/src/service/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  session: {
    jwt: true
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize({email, password}) {
        const user = await getByEmail(email);
        // console.log("User data from database:", user);
        if (!user) {
          // console.log("user not found", email)
          throw new Error("user don't exist");
        }
        const isValid = await verifyPassword(password, user.password)
        // console.log("Hashed password from database:", user.password);
        // console.log("Hashed password calculated:", isValid);
        if (!isValid) {
          throw new Error("Incorrect password");
        }
        return { email };
      },
    }),
  ],
};
export default NextAuth(authOptions);
