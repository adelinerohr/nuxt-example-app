import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { job } from "./job";

export const application = sqliteTable("application", {
  id: int().primaryKey({ autoIncrement: true }),
  jobId: int().notNull().references(() => job.id),
  userId: int().notNull().references(() => user.id),
  coverLetter: text(),
  resumeUrl: text(),
  appliedAt: int().notNull().$default(() => Date.now()),
});
