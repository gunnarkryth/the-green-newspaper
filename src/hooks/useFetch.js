import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        console.log("Response status: ", response.status);

        if (!response.ok) {
          const errorText = await response.text();
          console.error("Error details: ", errorText);
          throw new Error("Response not okay");
        }
        
        const result = await response.json();

        console.log(result);

        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
