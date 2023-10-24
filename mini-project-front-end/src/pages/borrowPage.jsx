import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./BookDetailsPage.css"; // Import the CSS file
import "./BorrowPage.css";

const BorrowPage = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    axiosInstance.post(`/book/${bookId}/borrow`).then((resp) => {
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
          <p>Congratulations! You've successfully borrowed the book.</p>
        </div>
      )}
      <h2>Book ID: {bookId}</h2>
      <div className="book-details">
        <h3>Borrow Id: {bookDetails?.borrowId}</h3>
        <h4>Due Date: {bookDetails?.dueDate}</h4>
        {/* <button
          className="action-button"
          onClick={() => navigate(`/book/${bookId}/return`)}
        >
          Return
        </button> */}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </div>
  );
};

export default BorrowPage;
