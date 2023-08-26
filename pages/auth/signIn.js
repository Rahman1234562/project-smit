import { Form } from "@/src/components/form";
import { signIn } from "next-auth/react"
import { useRouter } from "next/router";


const SignIn = () => {
    const router = useRouter();

    const onSignIn = async (email, password) => {
        try{
             const data = await signIn('credential', {redirect: false, email, password});
             console.log(data);
             if(data.ok){
                router.replace("/profile");
             }
        }catch(err){
          console.log(err.message)
        }
 
        

    }
    return(
        <>
        <Form signIn={true} onFormSubmit={onSignIn}/>
        </>
    )
}
export default SignIn;