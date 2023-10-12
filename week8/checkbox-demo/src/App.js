import { useState } from "react";
import Checkboxes from "./Checkboxes";

export default function App() {
  const fruits = ["Apple", "Orange", "Kiwi"];
  const [selectedFruits, setSelectedFruits] = useState([]);

  return (
    <div>
      <Checkboxes
        options={fruits}
        selected={selectedFruits}
        onCheckOrUncheck={(selectedFruits) => {
          setSelectedFruits(selectedFruits);
        }}
      />

      {selectedFruits.join(", ")}
    </div>
  );
}
