import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";
import { Question } from "./../../../.next/static/webpack/app/createquiz/page.a231cbb553d5247c.hot-update";

export async function POST(req: NextRequest) {
  const res = await req.json();
  //   console.log(res);
  //   console.log(typeof res);
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
