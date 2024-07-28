import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data.id);
  const id = data.id;
  const res = await prisma.quiz.findMany({
    where: {
      id: data.id,
    },
  });

  return NextResponse.json({
    msg: "hi",
    res,
  });
}
