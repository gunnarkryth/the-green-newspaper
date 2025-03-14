import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading/Loading";
import { Login } from "../components/Login/Login";
import { SignUp } from "../components/SignUp/SignUp";

export const Profile = () => {
  return (
    <>
      <Login />
      <SignUp />
    </>
  );
};
