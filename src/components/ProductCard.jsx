import s from "./ProductCard.module.scss";

export const ProductCard = ({ image, name }) => {
  return (
    <figure className={s.productCard}>
      <img src={image} alt={`image of ${name}`} />
      <figcaption>{name}</figcaption>
    </figure>
  );
};
