import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db";
export async function GET(req: NextRequest) {
  const res = await prisma.quiz.findMany();

  return NextResponse.json({
    msg: "ok",
    res,
  });
}
