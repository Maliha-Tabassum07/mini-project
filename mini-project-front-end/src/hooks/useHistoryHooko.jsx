import axiosInstance from "../utils/axiosInstance";
import { useEffect, useState } from "react";

const useHistoryHook = (userId) => {
  const [historys, setHistory] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/users/${userId}/history`)
      .then((resp) => {
        const data = resp.data;
        console.log("Data ", data);
        setHistory(data);
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { historys, handleSubmit, errors };
};

export default useHistoryHook;
