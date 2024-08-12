import React from "react";
import "./cards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
export default function Cards({ flashcard, flip, setFlip, onDelete, onEdit }) {
  return (
    <div
      className={`flip-card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <button
              className="edit-btn"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(flashcard.id);
              }}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button
              className="del-btn"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(flashcard.id);
              }}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
            <p className="title">{flashcard.question}</p>
          </div>
          <div className="flip-card-back">
            <button
              className="edit-btn"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(flashcard.id);
              }}>
              <FontAwesomeIcon icon={faPenToSquare} />
            </button>

            <p className="title">{flashcard.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
