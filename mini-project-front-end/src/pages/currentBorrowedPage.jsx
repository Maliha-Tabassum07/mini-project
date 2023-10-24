import CurrentBorrowedList from "../components/currentBorrowedList";
import useBorrowBookHook from "../hooks/useBorrowBookHook";
import { useParams, useNavigate } from "react-router-dom";

const CurrentBorrowedPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        List of books you have currently borrowed
      </h1>
      <CurrentBorrowedList />
    </div>
  );
};

export default CurrentBorrowedPage;
