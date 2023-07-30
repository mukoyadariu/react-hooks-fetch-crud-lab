import React, { useState } from "react";

function QuestionForm({ onSubmit }) {
  const [prompt, setPrompt] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newQuestion = { id: Date.now(), prompt, answer };
    onSubmit(newQuestion);
    setPrompt("");
    setAnswer("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question Prompt:</label>
        <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} />
      </div>
      <div>
        <label>Answer:</label>
        <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default QuestionForm;
