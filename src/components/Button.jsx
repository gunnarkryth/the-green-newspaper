export const Button = ({ backgroundColor, border, text, icon }) => {
  return (
    <button style={{ backgroundColor: backgroundColor, border: border }}>
      {icon ? <img src={icon} alt={icon} /> : <p>{text}</p>}
    </button>
  );
};
