CREATE TABLE `achievements` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`thumbnail` text NOT NULL,
	`name` text NOT NULL,
	`subtitle` text NOT NULL,
	`description` text
);
--> statement-breakpoint
CREATE TABLE `experiences` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`thumbnail` text NOT NULL,
	`name` text NOT NULL,
	`role` text NOT NULL,
	`description` text NOT NULL,
	`start_at` integer NOT NULL,
	`end_at` integer
);
--> statement-breakpoint
CREATE TABLE `experiences_to_projects` (
	`experience_id` integer NOT NULL,
	`project_id` text NOT NULL,
	PRIMARY KEY(`experience_id`, `project_id`),
	FOREIGN KEY (`experience_id`) REFERENCES `experiences`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` text PRIMARY KEY NOT NULL,
	`thumbnail` text NOT NULL,
	`cover` text NOT NULL,
	`name` text NOT NULL,
	`description` text NOT NULL,
	`category` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`avatar` text NOT NULL,
	`name` text NOT NULL,
	`subtitle` text NOT NULL,
	`rating` integer NOT NULL,
	`description` text NOT NULL,
	`is_highlighted` integer DEFAULT false NOT NULL,
	`sequence` integer NOT NULL
);
