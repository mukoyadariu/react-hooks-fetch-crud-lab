import React from "react";

function QuestionList({ questions, onDelete, onUpdateAnswer }) {
  return (
    <div>
      <h2>Question List</h2>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <p>{question.prompt}</p>
            <input
              type="text"
              value={question.answer}
              onChange={(e) => onUpdateAnswer(question.id, e.target.value)}
            />
            <button onClick={() => onDelete(question.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionList;
