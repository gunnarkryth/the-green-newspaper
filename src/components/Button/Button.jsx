import s from "./Button.module.scss";

export const Button = ({ backgroundColor, border, text, icon }) => {
  return (
    <button
      className={`${s.button} ${s[backgroundColor]}`}
      style={{ backgroundColor: backgroundColor, border: border }}
    >
      {icon ? (
        <img className={s.icon} src={icon} alt={icon} />
      ) : (
        <p className={s.text}>{text}</p>
      )}
    </button>
  );
};
