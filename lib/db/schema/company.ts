import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

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
