import { useNavigate, useParams } from "react-router-dom";
import useHistoryHook from "../hooks/useHistoryHooko";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { historys, handleSubmit, errors } = useHistoryHook(userId);

  return (
    <div className="book-list-container">
      <h2>User History</h2>
      {historys &&
        historys.map((history) => (
          <div key={history.borrowId} className="book-card">
            <div>
              <h3>Book Name: {history.book.name}</h3>
              <p>Due Date: {history.dueDate}</p>
              <p>Return Date: {history.returnDate}</p>
            </div>
            {/* Back button */}
          </div>
        ))}
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back
      </button>
    </div>
  );
};

export default ReviewPage;
