import { signOut } from "next-auth/react"
import Link from "next/link"



export const Header = () => {
    return(
            <div className="w-full h-20 flex justify-between items-center shadow-md px-10">

    <h1 className="font-bold">NEXT AUTHENTICATION</h1>
    <div className="flex gap-6">
        <Link className="shadow-md py-2 px-6 border-[1px] border-black rounded-full font-semibold hover:bg-[#efefef]"
         href={"/profile"}>
        profile
        </Link>
        <Link className="shadow-md py-2 px-6 border-[1px] border-black rounded-full font-semibold hover:bg-[#efefef] " href={"/auth/signin"}>
        log in
        </Link>
        <div onClick={signOut} className="shadow-md py-2 px-6  bg-black rounded-full text-white cursor-pointer font-semibold hover:opacity-70">
            sign out
        </div>

    </div>
    </div>
    )

}