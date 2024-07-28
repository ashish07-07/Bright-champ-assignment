"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

interface Quiz {
  id: number;
  name: string;
}

export default function Seequiz() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const session = useSession();

  useEffect(() => {
    async function getDetails() {
      try {
        const res = await axios.get("/api/seequiz");
        setQuizzes(res.data.res);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quizzes:", error);
        setLoading(false);
      }
    }

    getDetails();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (session.status === "authenticated") {
    return (
      <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center p-6">
        <div className="w-full max-w-4xl bg-white shadow-xl rounded-lg p-6">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Available Quizzes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="flex flex-col justify-between bg-gray-100 p-4 rounded-lg shadow-sm hover:bg-gray-200 transition duration-300"
              >
                <span className="text-xl font-medium text-gray-900">
                  {quiz.name}
                </span>
                <Link href={`/Testquiz?id=${quiz.id}`}>
                  <button className="mt-4 px-4 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg hover:from-green-500 hover:to-green-700 transition duration-300">
                    Take Quiz
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    signIn(undefined, { callbackUrl: "/" });
  }
}
