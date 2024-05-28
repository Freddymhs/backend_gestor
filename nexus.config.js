// Este archivo se utilizará para configurar el plugin Nexus-Prisma.
const { makePrismaClient } = require('@prisma/client');
const { nexusPrisma } = require('nexus-prisma');

const prisma = makePrismaClient();

module.exports = nexusPrisma({
  prisma,
});
