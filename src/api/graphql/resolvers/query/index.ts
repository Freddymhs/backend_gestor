import { queryType } from "nexus";

// Definición de la consulta Query
export const Query = queryType({
  definition(t) {
    t.list.field('users', {
      type: 'User',
      resolve: () => {
        return [
          { id: 1, name: 'John', email: 'john@example.com' },
          { id: 2, name: 'Alice', email: 'alice@example.com' },
        ];
      },
    });
  },
});

// import { objectType } from "nexus";

// // QUERIES Y MUTACIONES
// const Query = objectType({
//     name: "Query",
//     definition(t) {
//       t.list.field("allUsers", {
//         type: "User",
//         resolve: () => prisma.user.findMany(),
//       });
//       t.list.field("allPosts", {
//         type: "Post",
//         resolve: () => prisma.post.findMany(),
//       });
//     },
//   });
  
  