import { int, sqliteTable } from "drizzle-orm/sqlite-core";

import { job } from "./job";

export const savedJob = sqliteTable("savedJob", {
  jobId: int().references(() => job.id),
  savedAt: int().notNull().$default(() => Date.now()),
});
