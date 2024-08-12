import React, { useState } from "react";
import CardList from "./components/CardList";

export default function App() {
  const [cards, setCards] = useState(sample);

  return (
    <div>
      <div>
        <CardList flashcards={cards} />
      </div>
    </div>
  );
}

const sample = [
  { question: "q1", answer: "a1" },
  { question: "q2", answer: "a2" },
  { question: "q3", answer: "a3" },
  { question: "q4", answer: "a4" },
  { question: "q5", answer: "a5" },
  { question: "q6", answer: "a6" },
];
