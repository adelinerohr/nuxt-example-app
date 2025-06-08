import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { company } from "./company";

export const job = sqliteTable("job", {
  id: int().primaryKey({ autoIncrement: true }),
  companyId: text().notNull().references(() => company.id),
  title: text().notNull(),
  location: text(),
  description: text(),
  salaryRange: text(),
  employmentType: text({ enum: ["full_time", "part_time", "contract", "internship"] }),
  isRemote: int({ mode: "boolean" }).$default(() => false),
  postedAt: int().notNull().$default(() => Date.now()),
});
