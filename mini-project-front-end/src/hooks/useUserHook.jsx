import axios from "axios";
import { useEffect, useState } from "react";

const useUserHook = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8085/users")
      .then((resp) => {
        const data = resp.data;

        console.log("Data ", data.data);
        // setProducts(response.data.products.slice(0, 20));
        setUsers(data.users.slice(0, 10));
      })
      .catch((error) => {
        console.log(error);
        setErrors(errors);
      });
  }, []);

  const handleSubmit = () => {
    console.log("Submitting from custom hook");
  };

  return { users, handleSubmit, errors };
};

export default useUserHook;
