import { PrismaClient } from "@prisma/client";

export const prismaclient = new PrismaClient({ log: ["query"] })