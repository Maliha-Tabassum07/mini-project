import useBorrowBookHook from "../hooks/useBorrowBookHook";
import { useParams, useNavigate } from "react-router-dom";

const CurrentBorrowedList = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { borrows, handleSubmit, errors } = useBorrowBookHook();

  return (
    <div className="book-list-container">
      {borrows &&
        borrows.map((borrow) => {
          return (
            <div key={borrow.borrowId} className="book-card">
              <h4>Book Id: {borrow.book.bookId}</h4>
              <h4>Book Name: {borrow.book.name}</h4>
              <h4>Borrow Id: {borrow.borrowId}</h4>
              <h6>Due Date: {borrow.dueDate}</h6>
              <button
                onClick={() => navigate(`/book/${borrow.book.bookId}/return`)}
                className="action-button"
              >
                Return
              </button>
            </div>
          );
        })}
    </div>
  );
};
export default CurrentBorrowedList;
