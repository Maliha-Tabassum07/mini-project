import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useBorrowedBookHook = () => {
  const userId = localStorage.getItem("userId");
  const [borrows, setBorrows] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/users/${userId}/borrowed-books`)
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setBorrows(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { borrows, handleSubmit, errors };
};

export default useBorrowedBookHook;
