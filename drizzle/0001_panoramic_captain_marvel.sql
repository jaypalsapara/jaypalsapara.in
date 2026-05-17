CREATE TABLE `technologies` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`slug` text NOT NULL,
	`icon` text NOT NULL,
	`name` text NOT NULL,
	`color` text NOT NULL,
	`url` text NOT NULL,
	`type` text NOT NULL,
	`category` text NOT NULL
);
