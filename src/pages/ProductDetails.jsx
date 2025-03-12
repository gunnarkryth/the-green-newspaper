import { useParams } from "react-router";
import { useFetch } from "../hooks/useFetch";
import { Loading } from "../components/Loading";

export const ProductDetails = () => {
  const { slug } = useParams();

  if (!slug) return <div>Product not found</div>;

  const { data, loading, error } = useFetch(
    `http://localhost:4242/products/${slug}`
  );

  if (loading) return <Loading />;
  if (error) return <div>Error: {error}</div>;

  const { name, image, description, price, category, owner, comments } =
    data.data;

  return (
    <>
      <img src={image} alt={`Image of ${name}`} />
      <h2>{name}</h2>
      <p>{description}</p>
      <h3>Pris: {price}</h3>

      <section>
        <h2>Comments</h2>
        {comments && comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <p>
                {comment.user.firstname} {comment.user.lastname} |{" "}
                {comment.updatedAt
                  ? new Date(comment.updatedAt).toLocaleString("da-DK")
                  : new Date(comment.createdAt).toLocaleString("da-DK")}
              </p>
              <p>{comment.comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </section>
    </>
  );
};
