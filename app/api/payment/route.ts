import { db } from "@/config";
import { paymentTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseErr) {
      console.error("Failed to parse request body:", parseErr);
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("Request body:", body);

    const { plan, cardNumber, name, phone, expiryDate, cvv, email } = body;

    // Validate required fields
    if (
      !plan ||
      !cardNumber ||
      !name ||
      !phone ||
      !expiryDate ||
      !cvv ||
      !email
    ) {
      console.log("Validation failed - missing fields");
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if email already exists
    const existEmail = await db
      .select()
      .from(paymentTable)
      .where(eq(paymentTable.email, email));

    if (existEmail.length > 0) {
      console.log("Email already exists");
      return new Response(JSON.stringify({ error: "Email already exists" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const cardNumberInt = parseInt(cardNumber, 10);
    const phoneInt = parseInt(phone, 10);
    const cvvInt = parseInt(cvv, 10);

    console.log("Parsed values:", { cardNumberInt, phoneInt, cvvInt });

    if (isNaN(cardNumberInt) || isNaN(phoneInt) || isNaN(cvvInt)) {
      console.log("NaN detected in parsed values");
      return new Response(JSON.stringify({ error: "Invalid numeric values" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await db
      .insert(paymentTable)
      .values({
        plan,
        cardNumber: cardNumberInt,
        name,
        phone: phoneInt,
        expiryDate,
        cvv: cvvInt,
        email,
      })
      .returning();

    console.log("Payment inserted successfully:", result);

    return new Response(
      JSON.stringify({ message: "Payment successful", data: result }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Payment error caught:", error);

    let errorMessage = "Unknown error";
    let errorStack = "";

    if (error instanceof Error) {
      errorMessage = error.message;
      errorStack = error.stack || "";
    } else if (typeof error === "string") {
      errorMessage = error;
    } else {
      errorMessage = JSON.stringify(error);
    }

    console.error("Error details:", { errorMessage, errorStack });

    return new Response(
      JSON.stringify({
        error: "Payment processing failed",
        details: errorMessage,
        stack: process.env.NODE_ENV === "development" ? errorStack : undefined,
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function GET() {
  try {
    const payments = await db.select().from(paymentTable);
    return NextResponse.json({ success: true, data: payments });
  } catch (error) {
    console.error("Error Fetching orders:", error);
    return NextResponse.json(error, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return new Response(JSON.stringify({ error: "Order ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const result = await db
      .delete(paymentTable)
      .where(eq(paymentTable.id, parseInt(id, 10)))
      .returning();

    if (result.length === 0) {
      return new Response(JSON.stringify({ error: "Order not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(
      JSON.stringify({ message: "Order removed successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error Deleting order:", error);
    return new Response(JSON.stringify({ error: "Failed to remove order" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
