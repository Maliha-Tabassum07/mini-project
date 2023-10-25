import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./BookDetailsPage.css"; // Import the CSS file

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    axiosInstance.get(`/users/${userId}`).then((resp) => {
      const data = resp.data;
      setUserDetails(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>USER ID: {userId}</h1>
      <div>
        <h3>First Name: {userDetails?.firstName}</h3>
        <h3>Last Name: {userDetails?.lastName}</h3>
        <h3>Email Address: {userDetails?.email}</h3>
        <h3>Current Address: {userDetails?.address}</h3>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back
      </button>
    </div>
  );
};

export default UserDetailsPage;
