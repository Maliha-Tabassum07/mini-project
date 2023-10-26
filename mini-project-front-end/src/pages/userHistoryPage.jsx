import { useNavigate, useParams } from "react-router-dom";
import useHistoryHook from "../hooks/useHistoryHooko";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { historys, handleSubmit, errors } = useHistoryHook(userId);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>User History</h2>
      <div className="book-list-container">
        <ul>
          <div>
            {historys &&
              historys.map((history) => (
                <li key={history.borrowId} className="book-card">
                  <h3>Book Name: {history.book.name}</h3>
                  <h6>Author Name: {history.book.author}</h6>
                  <p>Due Date: {history.dueDate}</p>
                  <p>Return Date: {history.returnDate}</p>
                </li>
              ))}
          </div>
        </ul>
      </div>
      <button className="back-button" onClick={() => navigate("/")}>
        &larr; Back
      </button>
    </>
  );
};

export default ReviewPage;
