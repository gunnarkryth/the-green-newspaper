import { Outlet } from "react-router";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { UserProvider } from "../context/UserContext";

export const GlobalLayout = () => {
  return (
    <>
      <UserProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserProvider>
    </>
  );
};
