import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/\.0+$/, "");
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

export default FeedbackStats;
