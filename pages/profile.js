import { getSession } from "next-auth/react";

export default function Profile() {
  return (
    <>
        <div className="h-[70vh] flex justify-center">
      <h1 className="text-3xl font-semibold">wellcome to My profile page</h1>
    </div>

    <p className="mb-10">i am working is an <span>web</span> and <span>app</span> develpment is an smit</p>
    </>


    
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
