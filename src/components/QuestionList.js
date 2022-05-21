import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onQuestionDelete, onQuestionAnswerChange }) {

  const questionItems = questions.map((question) => <QuestionItem key={question.id} question={question} onQuestionDelete={onQuestionDelete} onQuestionAnswerChange={onQuestionAnswerChange}></QuestionItem>)
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{/* display QuestionItem components here after fetching */
        questionItems}</ul>
    </section>
  );
}

export default QuestionList;
