import { Form } from "@/src/components/form";
import { signIn } from "next-auth/react"




const SignUp = () => {

    const onSignUp = async  (email, password) => {
        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify({email, password}),
            headers: {
                "Content-Type" : "application/json"
            }
        })
       const data = await res.json();
       if(!res.ok) {
        console.error(data.message);
        return;
       }
        alert("sign up successful");

    }
    return (
        <>
        <Form signIn={false} onFormSubmit = {onSignUp}/>
        </>
    )
}
export default SignUp;