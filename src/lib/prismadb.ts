import { PrismaClient } from "@prisma/client";

// Create and export a new instance of PrismaClient for interacting with the database
export const prismadb = new PrismaClient();
