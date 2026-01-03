import { integer, pgTable, varchar, bigint } from "drizzle-orm/pg-core";

export const paymentTable = pgTable("payment", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  phone: bigint({ mode: "number" }).notNull(),
  cardNumber: bigint({ mode: "number" }).notNull(),
  expiryDate: varchar({ length: 7 }).notNull(),
  cvv: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  plan: varchar({ length: 100 }).notNull(),
});

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  role: varchar({ length: 100 }).notNull().default("user"),
  email: varchar({ length: 255 }).notNull().unique(),
  userId: varchar({ length: 255 }).notNull().unique(),
});
