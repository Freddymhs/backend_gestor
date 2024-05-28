const { objectType } = require('nexus');
const { nexusPrisma } = require('nexus-prisma');

const { types } = nexusPrisma({
  // ... (Configuración de Nexus-Prisma)
});

// Defina sus tipos de GraphQL aquí

module.exports = objectType({
  name: 'Query',
  definition(t) {
    t.field('posts', {
      type: types.Post,
      list: true,
      resolve: () => {
        // Implementar la lógica de resolución aquí
      },
    });
  },
});
