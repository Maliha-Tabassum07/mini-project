import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./BookDetailsPage.css"; // Import the CSS file

const BookDetailsPage = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();

  useEffect(() => {
    axiosInstance.get(`/book/get/${bookId}`).then((resp) => {
      const data = resp.data;
      setBookDetails(data);
    });
  }, []);

  // Define the function to handle borrowing or reserving
  const handleBorrowOrReserve = () => {};

  return (
    <div className="container">
      <h1>Book ID: {bookId}</h1>
      <div className="book-details">
        <h2>Name: {bookDetails?.name}</h2>
        <h3>Author: {bookDetails?.author}</h3>
        <h3>Genre: {bookDetails?.genre}</h3>
        <h3>Description: {bookDetails?.description}</h3>
        <h3>Status: {bookDetails?.available}</h3>
        <img src={bookDetails?.url} alt="Book Cover" />

        {role === "ADMIN" ? (
          <>
            <button
              onClick={() => navigate(`/book/${bookDetails?.bookId}/update`)}
              className="action-button"
            >
              Edit
            </button>
            <button
              onClick={() => navigate(`/book/${bookDetails?.bookId}/delete`)}
              className="action-button"
            >
              Delete
            </button>
          </>
        ) : (
          <>
            {bookDetails?.available === "available" ? (
              <button
                onClick={() => navigate(`/book/${bookDetails?.bookId}/borrow`)}
                className="action-button"
              >
                Borrow Book
              </button>
            ) : (
              <button className="action-button" onClick={handleBorrowOrReserve}>
                Reserve Book
              </button>
            )}

            {/* Add Review Button */}
            <button className="action-button">Add Review</button>
          </>
        )}
      </div>
      {/* Back button */}
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
};

export default BookDetailsPage;
