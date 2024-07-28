"use client";

import { useSearchParams } from "next/navigation";

interface CorrectAnswers {
  [key: number]: string;
}

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "", 10);
  const totalQuestions = parseInt(searchParams.get("totalQuestions") || "", 10);

  const correctAnswersString = searchParams.get("correctAnswers");
  const correctAnswers: CorrectAnswers = correctAnswersString
    ? JSON.parse(decodeURIComponent(correctAnswersString))
    : {};

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        <h2 className="text-4xl font-extrabold mb-8 text-black">
          Quiz Results
        </h2>
        <p className="text-2xl font-semibold mb-4 text-black">
          Your Score: <span className="font-bold">{score}</span> /{" "}
          {totalQuestions}
        </p>
        <p className="text-xl font-medium mb-6 text-black">
          Thank you for participating in the quiz!
        </p>
        <div className="mt-6 text-left">
          <h3 className="text-3xl font-semibold mb-6 text-black">
            Correct Answers
          </h3>
          <ul className="list-disc list-inside pl-4">
            {Object.entries(correctAnswers).map(([index, answer]) => (
              <li key={index} className="mb-3 text-black">
                <strong className="font-semibold">
                  Question {parseInt(index, 10) + 1}:
                </strong>{" "}
                <span>{answer}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
