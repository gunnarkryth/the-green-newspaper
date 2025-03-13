import s from "./Dropdown.module.scss";

import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading/Loading";
import { useNavigate } from "react-router";

export const Dropdown = () => {
  const { data, loading, error } = useFetch("http://localhost:4242/categories");

  const navigate = useNavigate();

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const handleChange = (e) => {
    const category = e.target.value.replace(/\s+/g, "-").replace(/ø/g, "oe");
    navigate(`/category/${category}`);
  };

  return (
    <select className={s.dropdown} onChange={handleChange} defaultValue="">
      <option value="" disabled>
        Select a category
      </option>
      {data?.data.map((category) => (
        <option key={category.id} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
};
