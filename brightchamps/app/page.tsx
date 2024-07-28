"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

export default function FrontPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-blue-600 flex flex-col">
      <header className="p-4 bg-white shadow-md flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={40}
            className="mr-4"
          />
        </div>
        <button
          onClick={() => signIn()}
          className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Sign In
        </button>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center text-center p-6">
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-6 text-gray-900">
            <span className="text-blue-600">Bright</span>CHAMPS
          </h1>
          <p className="text-xl text-gray-800 mb-6">
            Power your child with important life-skills
          </p>
          <p className="text-md text-gray-700 mb-8">
            Unlock your child's full potential with our next-gen live-learning
            programs.
          </p>
          <div className="flex gap-6 justify-center">
            <Link href={"/createquiz"}>
              <button className="w-full max-w-xs px-8 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 font-semibold text-lg">
                Create Quiz
              </button>
            </Link>
            <Link href={"/seequizpage"}>
              <button className="w-full max-w-xs px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 font-semibold text-lg">
                Play Quiz
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
