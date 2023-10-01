import { getSession } from "next-auth/react";

export default function Profile() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-3xl font-semibold">wellcome to My profile page</h1>
      </div>

      <div className="text-center mt-24">
        <h1>About</h1>
        <p>
          Hey: My Name is Rehman i am an software engineer and new in the code
          world
        </p>
        <h1>Education</h1>
        <p>Bachlor degree of Computer science</p>
      </div>

      <div>
        <div className="container flex ">
          <div className="project1 flex flex-row text-center align-bottom text-start h-48 text-white bg-slate-500 w-[30%] ml-8 mt-40">
            <h1 className="text-center">Web Development</h1>
            <p></p>
          </div>
          <div className="project2 flex flex-row text-center align-bottom h-48 text-white bg-slate-500 w-[30%] ml-8 mt-40">
            <h1 className="text-center">UI/UX Designer</h1>
            <p></p>
          </div>
          <div className="project3 flex flex-row text-center align-bottom  h-48 text-white bg-slate-500 w-[30%] ml-8 mt-40">
            <h1 className="text-center">App Development</h1>
            <p></p>
          </div>
        </div>
        <div className="footer">
          <h1></h1>
        </div>
      </div>
      {/* <p className="ml-24 mt-12 font-bold">i am working is a <span className="text-blue-500">web</span> and <span className="text-blue-500">app</span> develpment is at smit</p> */}
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/signin",
        parmenent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
}
