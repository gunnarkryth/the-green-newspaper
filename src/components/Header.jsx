import s from "./Header.module.scss";

import { Button } from "./Button";
import { Dropdown } from "./Dropdown";
import { Logo } from "./Logo";
import { NavLink } from "react-router";

export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.content}>
        <Logo />
        <div className={s.userPanel}>
          <Dropdown />
          <Button text={"Opret annonce"} backgroundColor={"interactive"} />
          <div>
            <Button icon={"public/assets/icons/message.png"} />
            <Button icon={"public/assets/icons/info.png"} />
            <Button icon={"public/assets/icons/account.png"} />
          </div>
        </div>
      </div>
    </header>
  );
};
