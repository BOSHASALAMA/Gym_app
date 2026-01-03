import { db } from "@/config";
import { usersTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, name, userId } = await req.json();
  const user = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));

  if (user.length === 0) {
    const result = await db
      .insert(usersTable)
      .values({
        email: email,
        name: name,
        userId,
      })
      .returning();
    const inserted = Array.isArray(result) ? result[0] : result;
    return NextResponse.json(inserted);
  }
  return NextResponse.json(user[0]);
}

export async function GET(req: Request) {
  const users = await db.select().from(usersTable);
  return NextResponse.json(users);
}
