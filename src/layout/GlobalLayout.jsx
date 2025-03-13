import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const GlobalLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
