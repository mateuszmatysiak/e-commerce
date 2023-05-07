import { PrismaClient } from "@prisma/client";

import { getEnv } from "@app/env";

let prisma: PrismaClient;

if (getEnv("NODE_ENV") === "production") {
  prisma = new PrismaClient();
} else {
  const globalWithPrisma = global as typeof globalThis & { prisma: PrismaClient };

  if (!globalWithPrisma.prisma) {
    globalWithPrisma.prisma = new PrismaClient();
  }

  prisma = globalWithPrisma.prisma;
}

export { prisma };
