import { useNavigate, useParams } from "react-router-dom";
import useReviewHook from "../hooks/useReviewHook";

const ReviewPage = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const { reviews, handleSubmit, errors } = useReviewHook(bookId);

  return (
    <>
      <div className="book-list-container">
        <div>
          <h2>Reviews</h2>
        </div>
        {reviews &&
          reviews.map((review) => {
            return (
              <>
                <div key={review.reviewId} className="book-card">
                  <div>
                    <h3> {review.user.firstName}</h3>
                    <p> {review.review}</p>
                    <p>Rating: {review.ratings}</p>
                  </div>
                  {/* Back button */}
                </div>
              </>
            );
          })}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        &larr; Back
      </button>
    </>
  );
};

export default ReviewPage;
