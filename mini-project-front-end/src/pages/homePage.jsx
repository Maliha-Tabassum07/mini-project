import React from "react";
import BookListHome from "../components/BookListHome";

const HomePage = () => {
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
