import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useBookHookLimited = () => {
  const [books, setBooks] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get("/book/all")
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setBooks(data.slice(0,4));
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { books, handleSubmit, errors };
};

export default useBookHookLimited;
