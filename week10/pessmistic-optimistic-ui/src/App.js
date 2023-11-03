import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify"

function saveLike() {
  return new Promise((resolve, reject) =>{
    setTimeout(() => {
      reject();
    }, 1000);
  })
}

export default function App() {
  const [isLiked, setIsLiked] = useState(false);
  // const [isSaving, setIsSaving] = useState(false);

  return (
    <div>
      <h1>Optimistic UI</h1>
      <button type="button" className="btn btn-link" onClick={() => {
        const updatedIsLike = !isLiked;
        // setIsSaving(true);
        setIsLiked(updatedIsLike);
        saveLike().then(
          () => {},
          (err) => {
            setIsLiked(!updatedIsLike); // error hanlder restores the state of isLiked to correct state
            toast.error("oops something went wrong. Please try again");
          }
        );
      }}>
        <FontAwesomeIcon icon={faHeart} color={isLiked ? "red" : "#eee"} size="2x"/>
      </button>
      <ToastContainer position="bottom-right" autoClose={1000} />
    </div>
  );
}
