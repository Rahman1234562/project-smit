import Link from "next/link"
import { useRef } from "react"

export const Form = ({signIn, onFormSubmit}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        onFormSubmit(email, password);

    }

    return(
        <div className="w-1/2 h-[70vh] flex justify-center  items-center mx-64">
            <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center items-center gap-5 py-10 border shadow-md rounded-md ">
                <label className="w-1/2">
                    Email:
                    <br />
                    <input
                    ref={emailRef}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-6 h-10 bg-white shadow-md rounded"/>
                </label>
                <label className="w-1/2">
                    Password:
                    <br />
                    <input
                    ref={passwordRef}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-6 h-10 bg-white shadow-md rounded"/>
                </label>

                {signIn ? (
          <p>
            Don't have an account? 
            <Link
              className="font-bold text-[#0382c3] mx-2"
              href={"/auth/signup"}
            >
               Sign up
            </Link>{" "}
          </p>
        ) : (
          <p>
            Already have account?
            <Link
              className="font-bold text-[#0382c3] mx-2"
              href={"/auth/signin"}
            >
              Log in
            </Link>
          </p>
        )}
        <input
          type="submit"
          value={signIn ? "Log in" : "Sign up"}
          className="w-1/3 py-2 rounded text-white font-bold tracking-wide bg-[#a553b3] cursor-pointer"
        />
               
            </form>
        </div>
    )
 }