import React from "react";
import "../styles/Iha.css";

function Iha({ iha, onDelete }) {
  const formattedDate = new Date(iha.created_at).toLocaleDateString("en-US");

  return (
    <div className="iha-container">
      <p className="iha-title">{iha.title}</p>
      <p className="iha-content">{iha.content}</p>

      <p className="iha-date">{formattedDate}</p>
      <button className="delete-button" onClick={() => onDelete(iha.id)}>
        Delete
      </button>
    </div>
  );
}

export default Iha;
