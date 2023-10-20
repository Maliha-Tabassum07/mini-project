import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const UserDetails = () => {
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    axiosInstance.get(`/users/${userId}`).then((resp) => {
      const data = resp.data;
      setUserDetails(data);
    });
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>User details of ID: {userId}</h1>
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

export default UserDetails;
