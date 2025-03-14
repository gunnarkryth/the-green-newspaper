import s from "./Footer.module.scss";

import { NavLink } from "react-router";

export const Footer = () => {
  return (
    <footer className={s.footer}>
      <section>
        <h3>Nyhedsbrev</h3>
        <p>
          Vil du være med på den grønne front? Tilmeld dig vores nyhedsbrev og
          få de seneste klima opdateringer direkte i din indbakke
        </p>
        <input type="text" name="" id="" />
      </section>
      <section>
        <h3>Kontakt</h3>
        <ul>
          <li>Redningen 32</li>
          <li>2210 Vinterby Øster</li>
          <li>+45 88229422</li>
          <li>dga@info.dk</li>
        </ul>
      </section>
      <section>
        <h3>FN's Verdensmål</h3>
        <p>
          Vi støtter på organisatorisk plan op om FN´s verdensmål og har derfor
          besluttet at en del af overskuddet går direkte til verdensmål nr. 13;
          Klimahandling
        </p>
        <NavLink
          target="_blank"
          to="https://www.verdensmaalene.dk/fakta/verdensmaalene"
        >
          Læs mere om verdensmålene her
        </NavLink>
      </section>
    </footer>
  );
};
