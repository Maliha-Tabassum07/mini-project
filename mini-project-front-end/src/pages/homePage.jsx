import React from "react";
import BookListHome from "../components/BookListHome";
import backgroundImage from "./header.jpg";
const HomePage = () => {
  const headerStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundRepeat: "no-repeat", // Prevent the background from repeating
    opacity: 0.7, // Set the opacity value (0.7 means 70% opacity)
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <h1 className="text-center mb-4">Welcome to Book Worm!</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <BookListHome />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
