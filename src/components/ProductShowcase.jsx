import s from "./ProductShowcase.module.scss";

import { useFetch } from "../hooks/useFetch";
import { Loading } from "./Loading";
import { ProductCard } from "./ProductCard";

export const ProductShowcase = ({ products }) => {
  const { data, loading, error } = useFetch("http://localhost:4242/products");

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const productsData = data?.data;

  return (
    <section className={s.productShowcase}>
      <h3>Udvalgte Produkter</h3>
      <div className={s.randomProducts}>
        {productsData?.slice(0, 6).map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
          />
        ))}
      </div>
    </section>
  );
};
