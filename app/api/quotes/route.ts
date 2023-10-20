import { NextResponse } from "next/server";
import getAllQuotes from "@/libs/getAllQuotes";

export async function GET(request: Request) {
  const quotes = await getAllQuotes();

  return NextResponse.json(quotes);
}