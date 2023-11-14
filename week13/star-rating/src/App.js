import StarRating from "./starRating";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  const [rating, setRating] = useState(3);
  return (
    <div>
      <StarRating
        rating={rating}
        onStarClick={(selectedRating) => {
          setRating(selectedRating);
        }}
        renderStar={(isStarFilled) => {
          return (
            <FontAwesomeIcon
              icon={faStar}
              size="5x"
              color={isStarFilled ? "green" : "#aaa"}
            />
          );
        }}
      >
        <p>Please select your rating</p>
      </StarRating>
    </div>
  );
}
