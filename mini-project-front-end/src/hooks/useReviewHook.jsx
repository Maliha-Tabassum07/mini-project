import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useReviewHook = (bookId) => {
  const [reviews, setReviews] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/book/${bookId}/reviews`)
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setReviews(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { reviews, handleSubmit, errors };
};

export default useReviewHook;
