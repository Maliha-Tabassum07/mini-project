import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import "./CreateBook.css";

const DeleteBook = () => {
  const navigate = useNavigate();
  const { bookId } = useParams(); // Get the bookId from the URL parameter
  const [isPostDone, setIsPostDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const handlePost = (e) => {
    e.preventDefault();

    const data = {
      bookId: bookId, // Include the bookId in the data to be updated
    };

    setIsLoading(true);
    axiosInstance
      .delete(`/book/delete/${bookId}`, data)
      .then((resp) => {
        console.log("The Response", resp);
        setIsPostDone(true);
        navigate("/book/all");
      })
      .catch((error) => {
        console.log("Error ", error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Delete Book</h1>
      {isPostDone && <h2 style={{ color: "green" }}>Book Deleted</h2>}
      {isLoading && <h1>Loading.....</h1>}
      <form onSubmit={handlePost}>
        <h3>Are you sure you want to delete the book?</h3>
        <button
          type="submit"
          style={{ backgroundColor: "red", color: "white" }}
        >
          Yes
        </button>
      </form>
      {/* Back button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
};

export default DeleteBook;
