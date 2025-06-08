import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const company = sqliteTable("company", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  website: text(),
  description: text(),
  logo: text(),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
