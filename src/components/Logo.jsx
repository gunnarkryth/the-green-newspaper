import { NavLink } from "react-router";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <NavLink className={s.logo} to="/">
      <h1>
        <span>Den Grønne</span>
        <span>Avis</span>
      </h1>
    </NavLink>
  );
};