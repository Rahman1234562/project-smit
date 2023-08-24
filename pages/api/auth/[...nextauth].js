import { getByEmail, verifyPassword } from "@/src/service/user"
import NextAuth from "next-auth"
export const authOptions = {
  session : {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
        async authorize (email, password) {

            const user = getByEmail(email, password);
            if(!user){
                throw new Error("user not found");
            }
            const isValid = await verifyPassword(user.password, password);
            if(!isValid) {
                throw new Error("Incorrect password");
            }
            return {email}
          }
    })
      
  ],
}
export default NextAuth(authOptions)