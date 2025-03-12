import { NavLink } from "react-router";
import s from "./ProductCard.module.scss";

export const ProductCard = ({ image, name, children, slug }) => {
  return (
    <NavLink to={`/product/${slug}`}>
      <figure className={s.productCard}>
        <img src={image} alt={`image of ${name}`} />
        <figcaption className={s.popUp}>{name}</figcaption>
        {children}
      </figure>
    </NavLink>
  );
};
