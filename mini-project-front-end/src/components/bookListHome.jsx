import { useNavigate } from "react-router-dom";
import "./BookList.css";
import useBookHookLimited from "../hooks/useBookHookLimited";

const BookListHome = () => {
  const navigate = useNavigate();
  const { books, handleSubmit, errors } = useBookHookLimited();

  return (
    <div className="book-list-container">
      {books &&
        books.map((book) => {
          return (
            <div key={book.bookId} className="book-card">
              <div className="image-container">
                <img src={book.url} alt="Book Cover" className="book-image" />
              </div>
              <h4>Title: {book.name}</h4>
              <h6>Author: {book.author}</h6>
            </div>
          );
        })}
    </div>
  );
};

export default BookListHome;
