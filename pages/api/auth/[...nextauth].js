import { getByEmail, verifyPassword } from "@/src/service/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentail",
      async authorize(email, password) {
        const user = await getByEmail(email);
        if (!user) {
          throw new Error("user don't exist");
        }
        const isValid = await verifyPassword(password, user.password);
        if (!isValid) {
          throw new Error("Incorrect password");
        }
        return { email };
      },
    }),
  ],
};
export default NextAuth(authOptions);
