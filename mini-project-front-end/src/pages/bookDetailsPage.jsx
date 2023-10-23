import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import "./BookDetailsPage.css"; // Import the CSS file

const BookDetailsPage = () => {
  const { bookId } = useParams();
  const [bookDetails, setBookDetails] = useState();

  useEffect(() => {
    axiosInstance.get(`/book/get/${bookId}`).then((resp) => {
      const data = resp.data;
      setBookDetails(data);
    });
  }, []);

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
      </div>
    </div>
  );
};

export default BookDetailsPage;
