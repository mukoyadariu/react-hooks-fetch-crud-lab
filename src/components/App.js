import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  const handleQuestionSubmit = (newQuestion) => {
    setQuestions([...questions, newQuestion]);
    setPage("List");
  };

  const handleQuestionDelete = (questionId) => {
    const updatedQuestions = questions.filter((question) => question.id !== questionId);
    setQuestions(updatedQuestions);
  };

  const handleAnswerUpdate = (questionId, newAnswer) => {
    const updatedQuestions = questions.map((question) =>
      question.id === questionId ? { ...question, answer: newAnswer } : question
    );
    setQuestions(updatedQuestions);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? (
        <QuestionForm onSubmit={handleQuestionSubmit} />
      ) : (
        <QuestionList
          questions={questions}
          onDelete={handleQuestionDelete}
          onUpdateAnswer={handleAnswerUpdate}
        />
      )}
    </main>
  );
}

export default App;
