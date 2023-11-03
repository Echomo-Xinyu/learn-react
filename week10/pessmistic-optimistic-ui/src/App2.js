// here it is a version of pessimistic UI

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function saveLike() {
  return new Promise((resolve) =>{
    setTimeout(() => {
      resolve();
    }, 100);
  })
}

export default function App() {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  return (
    <div>
      <h1>Pessimistic UI</h1>
      <button type="button" className="btn btn-link" onClick={() => {
        const updatedIsLike = !isLiked;
        setIsSaving(true);
        saveLike().then(() => {
          setIsLiked(updatedIsLike);
          setIsSaving(false);
        })
      }}>
        <FontAwesomeIcon icon={isSaving ? faSpinner : faHeart} color={isLiked ? "red" : "#eee"} size="2x"/>
      </button>
    </div>
  );
}
