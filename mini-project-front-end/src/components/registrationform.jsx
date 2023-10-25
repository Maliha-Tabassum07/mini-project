import axios from "axios";
import { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [isRegistrationDone, setIsRegistrationDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      // username: name,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      address: address,
    };

    setIsLoading(true);
    axiosInstance
      .post("/users/register", data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsRegistrationDone(true);
        navigate("/login");
        // setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error ", error);
        setError(error);
        // setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Registration</h1>
      {isRegistrationDone && (
        <h2 style={{ color: "green" }}>Successfully Done Registration</h2>
      )}
      {isLoading && <h1>Loading.....</h1>}
      <form onSubmit={handleRegister}>
        <div>
          <h4>First Name</h4>
          <input
            value={firstName}
            placeholder="Enter your first name"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Last Name</h4>
          <input
            value={lastName}
            placeholder="Enter your last name"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Email Address</h4>
          <input
            value={email}
            placeholder="Enter email address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Password</h4>
          <input
            value={password}
            placeholder="Enter Password"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div>
          <h4>Present Address</h4>
          <input
            value={address}
            placeholder="Enter Password"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
