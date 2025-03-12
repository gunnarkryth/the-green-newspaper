import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";

export const ProductDetails = () => {
  const { product } = useParams();

  // Guard: If no product slug is provided, render an error or null
  if (!product) return <div>Product not found</div>;

  const { data, loading, error } = useFetch(
    `http://localhost:4242/products/${product}`
  );

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const { name, image, description, price, category, owner, comments } =
    data.data;

  return (
    <>
      <h1>{name}</h1>
      <img src={image} alt={`Image of ${name}`} />
      <p>{description}</p>
      <p>Price: {price}</p>
      <p>Category: {category.name}</p>
      <p>
        Owner: {owner.firstName} {owner.lastName}
      </p>
      <section>
        <h2>Comments</h2>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.comment}</p>
              <p>
                By: {comment.user.firstname} {comment.user.lastname}
              </p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>
    </>
  );
};
