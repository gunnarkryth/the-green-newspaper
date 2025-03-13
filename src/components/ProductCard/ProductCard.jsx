import { NavLink, useNavigate } from "react-router";
import s from "./ProductCard.module.scss";

export const ProductCard = ({ image, name, children, slug }) => {
  const navigate = useNavigate();

  return (
    <figure
      className={s.productCard}
      onClick={() => navigate(`/product/${slug}`)}
    >
      <img src={image} alt={`image of ${name}`} />
      <figcaption className={s.popUp}>{name}</figcaption>
      {children}
    </figure>
  );
};
