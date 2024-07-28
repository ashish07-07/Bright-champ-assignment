"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function FrontPage() {
  const router = useRouter();

  const handleCreateQuiz = () => {
    router.push("/create-quiz"); // Adjust the path as needed
  };

  const handlePlayQuiz = () => {
    router.push("/play-quiz"); // Adjust the path as needed
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex flex-col">
      <header className="p-4 bg-white shadow-md">
        <button
          onClick={() => signIn()}
          className="float-right px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          Sign In
        </button>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-3xl">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">
            <span className="text-blue-600">Bright</span>CHAMPS
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Power your child with important life-skills
          </p>
          <p className="text-md text-gray-600 mb-8">
            Unlock your child's full potential with our next-gen live-learning
            programs
          </p>
          <div className="flex gap-4">
            <button
              onClick={handleCreateQuiz}
              className="w-full max-w-xs px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
            >
              Create Quiz
            </button>
            <button
              onClick={handlePlayQuiz}
              className="w-full max-w-xs px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Play Quiz
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
