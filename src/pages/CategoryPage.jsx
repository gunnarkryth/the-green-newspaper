import s from "./CategoryPage.module.scss";

import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";
import { ProductCard } from "../components/ProductCard";

export const CategoryPage = () => {
  const { category } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:4242/products/category/${category}`
  );

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const categoryName = category.replace(/\s+/g, "-");

  return (
    <section className={s.page}>
      <h2>{categoryName}</h2>
      <section className={s.products}>
        {data?.data.map((item) => (
          <ProductCard
            className={s.productCard}
            image={item.image}
            name={`${item.price} DKK`}
            slug={item.slug}
          >
            <figcaption>
              <h4>{item.name}</h4>
            </figcaption>
          </ProductCard>
        ))}
      </section>
    </section>
  );
};
