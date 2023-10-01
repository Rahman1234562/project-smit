import { getSession } from "next-auth/react";
import classes from "../styles/profile.module.css";
import  { RightSquareTwoTone } from '@ant-design/icons'

export default function Profile() {
  return (
    <div>
      <div className={classes.heading}>
        <h1 className="">wellcome to My profile page</h1>
      </div>

      <div className={classes.heading1}>
        <h1 className={classes.head}>About:</h1>
        <p className={classes.para}>
          Hey: My Name is Rehman i am an software engineer and new in the code
          world
        </p>
        <h1 className={classes.head2}>Education:</h1>
        <p className={classes.para1}>Bachlor degree of Computer science</p>
      </div>

      <div>
        <div className={classes.projects}>
          <div className={classes.projects1}>
            <h1>Web Development</h1>
            <p className={classes.paragh}>Build a High Quality of Website<br/> with the best technology<br/> and optimization an <span>search engine...</span></p>
            <RightSquareTwoTone />
          </div>
          <div className={classes.projects2}>
            <h1>UI/UX Designer</h1>
            <p className={classes.paragh1}>Create a beautiful and usefull <br /> UI display for case of use <br/> of the application for users...</p>
            <RightSquareTwoTone />
          </div>
          <div className={classes.projects3}>
            <h1>App Development</h1>
            <p className={classes.paragh2}>Create an app for  your<br /> own <span>Business</span> for more professional <br/> business performance...</p>
            <RightSquareTwoTone />
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
