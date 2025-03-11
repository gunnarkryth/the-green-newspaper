import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";

export const CategoryPage = () => {
  const { category } = useParams();
  const { data, loading, error } = useFetch(
    `http://localhost:4242/categories/${category}`
  );

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <h1>{category}</h1>
      <div>
        {data?.data.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </>
  );
};
