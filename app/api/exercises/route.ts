import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const muscle = searchParams.get("muscle");
  const difficulty = searchParams.get("difficulty");

  if (!muscle || !difficulty) {
    return NextResponse.json(
      { error: "Muscle and difficulty parameters are required" },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}&difficulty=${difficulty}`,
      {
        headers: {
          "X-Api-Key": "Rze/YH50lQV6ESZfifhyMw==FvcCRDWxRNIoFSTf",
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch ");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch exercises" },
      { status: 500 }
    );
  }
}
