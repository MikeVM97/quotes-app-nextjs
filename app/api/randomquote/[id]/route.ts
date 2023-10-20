import { NextResponse } from "next/server";
import getRandomQuote from "@/libs/getRandomQuote";

export const runtime = "edge";

type Props = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params: { id } }: Props) {
  try {
    const quote = await getRandomQuote(id);
    if (!quote) return NextResponse.json({ error: 'Quote not found' });
    return NextResponse.json(quote);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message });
    }
  }
}
