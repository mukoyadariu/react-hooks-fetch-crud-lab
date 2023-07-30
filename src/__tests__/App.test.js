import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";

test("displays question prompts after fetching", async () => {
  render(<App />);
  // Assuming the QuestionList component renders questions with prompts
  expect(await screen.findByText(/What is your name\?/)).toBeInTheDocument();
  expect(await screen.findByText(/How old are you\?/)).toBeInTheDocument();
});

test("creates a new question when the form is submitted", async () => {
  render(<App />);
  fireEvent.click(screen.getByText("New Question"));

  // Type new question prompt and answer
  fireEvent.change(screen.getByLabelText("Question Prompt:"), {
    target: { value: "New Question Prompt" },
  });
  fireEvent.change(screen.getByLabelText("Answer:"), {
    target: { value: "New Answer" },
  });

  fireEvent.click(screen.getByText("Submit"));

  // Check if the new question is added to the list
  expect(await screen.findByText(/New Question Prompt/)).toBeInTheDocument();
});

test("deletes the question when the delete button is clicked", async () => {
  render(<App />);
  fireEvent.click(screen.queryByText("View Questions"));

  // Assuming there is a delete button with the text "Delete" associated with each question
  fireEvent.click(screen.getAllByText("Delete")[0]);

  // Check if the deleted question is no longer in the list
  expect(screen.queryByText(/What is your name\?/)).not.toBeInTheDocument();
});

test("updates the answer when the input is changed", async () => {
  render(<App />);
  fireEvent.click(screen.queryByText("View Questions"));

  // Assuming there is an input field associated with the question answer
  const answerInput = screen.getAllByLabelText("Answer:")[0];
  fireEvent.change(answerInput, {
    target: { value: "New Answer" },
  });

  // Check if the answer is updated in the list
  expect(answerInput.value).toBe("New Answer");
});
