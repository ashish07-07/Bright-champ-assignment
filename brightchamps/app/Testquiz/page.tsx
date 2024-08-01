"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface Quiz {
  id: number;
  name: string;
  questions: Question[];
}

export default function TakeQuiz() {
  const res = useSearchParams();
  const id = parseInt(res.get("id") || "", 10);
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(30);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    async function getQuizDetails() {
      try {
        const res = await axios.post("/api/Seeparticularquiz", { id });
        setQuiz(res.data.res[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz details:", error);
        setLoading(false);
      }
    }

    if (id) {
      getQuizDetails();
    }
  }, [id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleSubmitQuiz();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOptionChange = (questionIndex: number, option: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: option,
    }));
  };

  const handleSubmitQuiz = async () => {
    try {
      const response = await axios.post("/api/submitQuiz", {
        quizId: id,
        answers,
      });
      console.log("Quiz submitted successfully:", response.data);
      console.log(response.data.score);
      const score = response.data.score;
      const totalQuestions = response.data.totalQuestions;
      const ans = response.data.correctAnswers;
      console.log("abe ");
      console.log(ans);
      const encodedCorrectAnswers = encodeURIComponent(JSON.stringify(ans));

      window.location.assign(
        `/results?id=${id}&score=${score}&totalQuestions=${totalQuestions} &correctAnswers=${encodedCorrectAnswers}`
      );
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="flex justify-center items-center h-screen">
        Quiz not found.
      </div>
    );
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          {quiz.name}
        </h2>
        <div className="mb-4 text-center text-xl font-medium text-gray-700">
          Time Left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmitQuiz();
          }}
        >
          <ul className="space-y-4">
            {quiz.questions.map((q, index) => (
              <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-sm">
                <h3 className="text-xl font-medium text-gray-900">
                  {q.question}
                </h3>
                <ul className="mt-2 space-y-2">
                  {q.options.map((option, idx) => (
                    <li key={idx} className="flex items-center">
                      <input
                        type="radio"
                        name={`question-${index}`}
                        value={option}
                        checked={answers[index] === option}
                        onChange={() => handleOptionChange(index, option)}
                        className="mr-2"
                      />
                      <label className="text-gray-700">{option}</label>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
          <button
            type="submit"
            className="mt-6 w-full px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 transition duration-300"
          >
            Submit Quiz
          </button>
        </form>
      </div>
    </div>
  );
}
