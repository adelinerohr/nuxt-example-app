import { int, sqliteTable } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { job } from "./job";

export const savedJob = sqliteTable("savedJob", {
  jobId: int().references(() => job.id),
  userId: int().references(() => user.id),
  savedAt: int().notNull().$default(() => Date.now()),
});
