import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [userDetails, setUserDetails] = useState();
  const [loading, setLoading] = useState(false);

  const callUserDetailsApi = () => {
    setLoading(true);
    axiosInstance
      .get(`/users/${searchText}`)
      .then((resp) => {
        const data = resp.data;
        setUserDetails(data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    const timeOut = setTimeout(() => {
      callUserDetailsApi();
    }, 1500);

    return () => clearTimeout(timeOut);
  }, [searchText]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Search User</h1>
      <input
        value={searchText}
        placeholder="Enter search key"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      {loading && <h1 style={{ color: "purple" }}>Loading</h1>}

      <h1>The details:</h1>
      <div>
        <h3>Name: {userDetails?.firstName}</h3>
        <h3>Email: {userDetails?.email}</h3>
        <h3>Gender:{userDetails?.gender}</h3>
        <h3>Age: {userDetails?.age}</h3>
        <h3>User Name:{userDetails?.username}</h3>
        <h3>Date of Birth: {userDetails?.birthDate}</h3>
        <img src={userDetails?.image} />
      </div>
    </div>
  );
};

export default SearchPage;
