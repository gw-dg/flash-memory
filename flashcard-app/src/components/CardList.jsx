import { useState, useEffect } from "react";
import React from "react";
import Cards from "./Cards";
import "./cards.css";
import "./navbar.css";

export default function CardList() {
  const [currIdx, setCurrIdx] = useState(0);
  const [flip, setFlip] = useState(false);
  const [cardlist, setCardList] = useState([]);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/flashcards");
      const data = await response.json();
      setCardList(data);
    } catch (error) {
      console.error("Error fetching flashcards:", error);
    }
  };

  const deleteCard = async (index) => {
    try {
      const cardToDelete = cardlist[index];
      await fetch(`http://localhost:5000/api/flashcards/${cardToDelete.id}`, {
        method: "DELETE",
      });
      setCardList((prevCards) => prevCards.filter((_, i) => i !== index));
      if (currIdx >= cardlist.length - 1) {
        setCurrIdx(Math.max(cardlist.length - 2, 0));
      }
    } catch (error) {
      console.error("Error deleting flashcard:", error);
    }
  };

  const addCard = async () => {
    const newQuestion = prompt("Enter the question for the new card:");
    const newAnswer = prompt("Enter the answer for the new card:");

    if (newQuestion && newAnswer) {
      try {
        const response = await fetch("http://localhost:5000/api/flashcards", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question: newQuestion, answer: newAnswer }),
        });
        const newCard = await response.json();
        setCardList((prevCards) => [...prevCards, newCard]);
        setCurrIdx(cardlist.length);
        setFlip(false);
      } catch (error) {
        console.error("Error adding flashcard:", error);
      }
    }
  };

  const editCard = async (index) => {
    const card = cardlist[index];
    if (!card) {
      console.error("Card not found");
      return;
    }

    const updatedQuestion = prompt("Edit the question:", card.question);
    const updatedAnswer = prompt("Edit the answer:", card.answer);

    if (updatedQuestion !== "" && updatedAnswer !== "") {
      try {
        const response = await fetch(
          `http://localhost:5000/api/flashcards/${card.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              question: updatedQuestion,
              answer: updatedAnswer,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to update flashcard");
        }
        const updatedCard = await response.json();
        setCardList((prevCards) =>
          prevCards.map((c, i) => (i === index ? updatedCard : c))
        );
      } catch (error) {
        console.error("Error updating flashcard:", error);
      }
    }
    setFlip(false);
  };

  return (
    <>
      <div className="navbar">
        <p className="navbar-logo">Dashboard</p>
        <button className="create-btn" onClick={addCard}>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="currentColor"
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
            </svg>{" "}
            Create
          </span>
        </button>
      </div>
      <div className="dashboard-body">
        <button
          className="navbtn"
          onClick={() => {
            setCurrIdx((prevIndex) =>
              prevIndex === 0 ? cardlist.length - 1 : prevIndex - 1
            );
            setFlip(false);
          }}>
          Prev
        </button>
        {cardlist.length > 0 ? (
          <Cards
            flashcard={cardlist[currIdx]}
            flip={flip}
            setFlip={setFlip}
            onDelete={() => deleteCard(currIdx)}
            onEdit={() => editCard(currIdx)}
          />
        ) : (
          <p>No cards available. Make new cards!</p>
        )}
        <button
          className="navbtn"
          onClick={() => {
            setCurrIdx((prevIdx) =>
              prevIdx === cardlist.length - 1 ? 0 : prevIdx + 1
            );
            setFlip(false);
          }}>
          Next
        </button>
      </div>
    </>
  );
}
