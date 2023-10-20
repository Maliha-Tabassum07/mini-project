import axios from "axios";
import { useEffect, useState } from "react";

const usePostHook = () => {
  const [posts, setPosts] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((resp) => {
        const data = resp.data;

        console.log("Data ", data.data);
        // setProducts(response.data.products.slice(0, 20));
        setPosts(data.posts.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { posts, handleSubmit, errors };
};

export default usePostHook;
