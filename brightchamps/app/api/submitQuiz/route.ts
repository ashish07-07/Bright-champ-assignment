import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { NEXT_AUTH } from "@/app/lib/auth";
import prisma from "@/app/db";

export async function POST(req: NextRequest) {
  const { quizId, answers } = await req.json();
  console.log(answers);
  const session = await getServerSession(NEXT_AUTH);
  const userId = session.user.id;

  const quiz = await prisma.quiz.findUnique({
    where: { id: quizId },
    select: {
      questions: true,
    },
  });

  if (!quiz) {
    return NextResponse.json({ message: "Quiz not found" }, { status: 404 });
  }

  type Question = {
    id: number;
    question: string;
    options: string[];
    answer: string;
  };

  const questions: Question[] = quiz.questions as Question[];

  let score = 0;
  const correctAnswers: { [index: number]: string } = {}; // Define correctAnswers with index signature

  questions.forEach((question, index) => {
    const submittedAnswer = answers[index];
    correctAnswers[index] = question.answer;
    if (submittedAnswer && submittedAnswer === question.answer) {
      score++;
    }
  });

  await prisma.quizSubmission.create({
    data: {
      quizId,
      answers: JSON.stringify(answers),
      submittedAt: new Date(),
      customerid: parseInt(userId, 10),
      score,
    },
  });

  return NextResponse.json({
    message: "Quiz submitted successfully",
    score,
    totalQuestions: questions.length,
    correctAnswers,
  });
}
