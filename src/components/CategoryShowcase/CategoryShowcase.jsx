import s from "./CategoryShowcase.module.scss";

import { useFetch } from "../../hooks/useFetch";
import { Loading } from "../Loading/Loading";
import { ProductCard } from "../ProductCard/ProductCard";

export const CategoryShowcase = ({ categories }) => {
  const { data, loading, error } = useFetch("http://localhost:4242/categories");

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const categoriesData = data?.data;

  return (
    <section className={s.categoryShowcase}>
      <h3>Udvalgte Produkter</h3>
      <div className={s.randomCategories}>
        {categoriesData?.slice(0, 6).map((category) => (
          <ProductCard
            key={category.id}
            image={category.category_image}
            name={category.name}
          />
        ))}
      </div>
    </section>
  );
};
