import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";

import { user } from "./auth";

export const company = sqliteTable("company", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: int().notNull().references(() => user.id),
  name: text().notNull(),
  website: text(),
  description: text(),
  logo: text(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});

export const InsertCompanySchema = createInsertSchema(company, {
  name: field => field.min(1),
}).omit({
  id: true,
  userId: true,
  createdAt: true,
  updatedAt: true,
  logo: true,
});
