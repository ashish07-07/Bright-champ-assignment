"use client";

import { useSearchParams } from "next/navigation";

export default function ResultsPage() {
  const searchParams = useSearchParams();
  const score = parseInt(searchParams.get("score") || "", 10);
  const totalQuestions = parseInt(searchParams.get("totalQuestions") || "", 10);

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Quiz Results</h2>
        <p className="text-xl font-medium text-gray-700">
          Your Score: {score} / {totalQuestions}
        </p>
        <p className="text-lg font-medium text-gray-700">
          Thank you for participating in the quiz!
        </p>
      </div>
    </div>
  );
}
