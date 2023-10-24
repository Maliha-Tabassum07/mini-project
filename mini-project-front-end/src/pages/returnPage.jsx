import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./BookDetailsPage.css"; // Import the CSS file
import "./BorrowPage.css";

const ReturnPage = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    axiosInstance.put(`/book/${bookId}/return`).then((resp) => {
      const data = resp.data;
      setBookDetails(data);
    });

    // Automatically hide the alert after 2 seconds
    const alertTimeout = setTimeout(() => {
      setShowAlert(false);
    }, 4000);

    return () => {
      clearTimeout(alertTimeout);
    };
  }, []);

  return (
    <div className="container">
      {showAlert && (
        <div className="custom-alert">
          <p>Congratulations! You've successfully returned the book.</p>
        </div>
      )}
      <h2>Book ID: {bookId}</h2>
      <div className="book-details">
        <h3>Borrow Id: {bookDetails?.borrowId}</h3>
        <h4>Due Date: {bookDetails?.dueDate}</h4>
        <h4>Return Date: {bookDetails?.returnDate}</h4>
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
};

export default ReturnPage;
