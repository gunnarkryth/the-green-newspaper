import s from "./Header.module.scss";

import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Logo } from "../Logo/Logo";
import { NavLink, useNavigate } from "react-router";

export const Header = () => {
  const navigate = useNavigate();

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
            <Button
              icon={"public/assets/icons/account.png"}
              onclick={() => navigate()}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
