import { getSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

export default function Profile() {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <h1 className="text-3xl font-semibold">My profile page</h1>
    </div>
  );
}


export async function getServerSideProps ({req}) {
  const session = await getSession({req});
  if(!session){
    return {
      redirect: {
        destination: "/auth/signin",
        parmenent: false
      }
    }
  }
  return{
    props: {
      session
    }
  }
}
