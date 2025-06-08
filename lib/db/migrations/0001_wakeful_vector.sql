ALTER TABLE `companies` RENAME TO `company`;--> statement-breakpoint
CREATE TABLE `application` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`job_id` integer NOT NULL,
	`cover_letter` text,
	`resume_url` text,
	`applied_at` integer NOT NULL,
	FOREIGN KEY (`job_id`) REFERENCES `job`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `job` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`company_id` text NOT NULL,
	`title` text NOT NULL,
	`location` text,
	`description` text,
	`salary_range` text,
	`employment_type` text,
	`is_remote` integer,
	`posted_at` integer NOT NULL,
	FOREIGN KEY (`company_id`) REFERENCES `company`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `savedJob` (
	`job_id` integer,
	`saved_at` integer NOT NULL,
	FOREIGN KEY (`job_id`) REFERENCES `job`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
ALTER TABLE `company` ADD `created_at` integer NOT NULL;--> statement-breakpoint
ALTER TABLE `company` ADD `updated_at` integer NOT NULL;