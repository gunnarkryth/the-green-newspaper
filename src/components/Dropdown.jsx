import s from "./Dropdown.module.scss";

export const Dropdown = () => {
  return (
    <select className={s.dropdown}>
      <option value="option1">Option1</option>
      <option value="option2">Option2</option>
      <option value="option3">Option3</option>
    </select>
  );
};
