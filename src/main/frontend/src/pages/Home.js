import { Link } from "react-router-dom";

export default function Home(){
    return (
      <>
      <Link to="/signUp">register</Link>
      <br/>
      <Link to="/signIn">sign in</Link>
    <h1>Home</h1>
    </>
    );
};