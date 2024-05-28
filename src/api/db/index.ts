// Database connection and operations

import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

// Manejo de cierre de PrismaClient al finalizar el proceso
async function cleanup() {
  await prisma.$disconnect();
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('SIGQUIT', cleanup);

export { prisma };
