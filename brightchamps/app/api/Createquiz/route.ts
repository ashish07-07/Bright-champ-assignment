import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";

export async function POST(req: NextRequest) {
  const res = await req.json();

  console.log(res.questions);
  console.log(res.name);

  const data = res.questions;

  await prisma.quiz.create({
    data: {
      name: res.name,
      questions: res.questions,
    },
    select: {
      questions: true,
    },
  });

  console.log("data added to database ");

  return NextResponse.json({
    res,
  });
}
