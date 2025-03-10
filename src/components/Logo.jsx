import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={s.logo}>
      <h1>
        <span>Den Grønne</span>
        <span>Avis</span>
      </h1>
    </div>
  );
};
