"use client";

import { Noto_Sans_Pahawh_Hmong } from "next/font/google";
import { useState } from "react";

export interface Question {
  question: string;
  options: string[];
  answer: string;
}

export default function QuizCreator() {
  const [cquestion, setCQuestion] = useState<string>("");
  const [coption, setCOption] = useState<string[]>(["", "", "", ""]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const handleAddQuestion = () => {
    // Validate inputs
    if (!cquestion.trim()) {
      alert("Please enter a question.");
      return;
    }

    if (coption.some((option) => !option.trim())) {
      alert("Please fill in all options.");
      return;
    }

    if (!currentAnswer.trim()) {
      alert("Please enter the correct answer.");
      return;
    }

    const newQuestion: Question = {
      question: cquestion,
      options: coption,
      answer: currentAnswer,
    };

    setQuestions([...questions, newQuestion]);
    setCQuestion("");
    setCOption(["", "", "", ""]);
    setCurrentAnswer("");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gradient-to-r from-purple-500 to-blue-500 shadow-xl rounded-lg text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">Create a Quiz</h2>
      <div className="mb-6 bg-white p-4 rounded-lg shadow-inner text-gray-800">
        <input
          type="text"
          name="General"
          placeholder="Enter the quiz question"
          value={cquestion}
          onChange={(e) => setCQuestion(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        {coption.map((option, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={option}
            onChange={(e) => {
              const newOption = [...coption];
              newOption[index] = e.target.value;
              setCOption(newOption);
            }}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        ))}
        <input
          type="text"
          placeholder="Enter correct answer"
          value={currentAnswer}
          onChange={(e) => setCurrentAnswer(e.target.value)}
          className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
      <button
        onClick={handleAddQuestion}
        className="w-full bg-blue-700 text-white py-3 px-6 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Add Question
      </button>

      <button
        className="w-full px-6 rounded text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium text-sm py-2.5 text-center me-2 mb-2"
        onClick={() => {
          console.log(questions);
        }}
      >
        Add the Quiz
      </button>
    </div>
  );
}
