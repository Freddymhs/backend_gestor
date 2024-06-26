import { arg, enumType, inputObjectType, objectType, unionType } from "nexus";

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////TYPES////////////////////////////////////////////////
///////////////// Definición del enum  ///////////////////////////////////////
export const Role = enumType({
  name: "Role",
  members: ["WORKER", "ADMIN", "CLIENT", "SUPPLIER"],
});

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////SCHEMA////////////////////////////////////////////////
///////////////// Definición del SCHEMA //////////////////////////////////////////
export const User = objectType({
  name: "User",
  definition(t) {
    t.int("id");
    t.boolean("enabled");
    t.string("role");
    t.string("name");
    t.field("Company", {
      type: "Company",
      resolve: (parent, args, { prisma }) => {
        return prisma.Company.findUnique({ where: { id: parent.id } });
      },
    });
    t.string("supabaseId");
    t.string("email");
    t.list.field("permission", {
      type: "Permission",
      resolve: (parent, args, { prisma }) => {
        return prisma.Permission.findMany({
          where: {
            users: {
              some: {
                id: parent.id,
              },
            },
          },
        });
      },
    });

    t.field("profile", {
      type: "Profile",
      resolve: (parent, args, ctx) => {
        // Lógica para obtener el perfil del usuario
        return { id: 1, bio: "Bio example", role: "CLIENT", userId: parent.id };
      },
    });
    t.list.field("sales", {
      type: "Sale",
      resolve: (parent, args, ctx) => {
        // Lógica para obtener las ventas del usuario
        return parent.role !== "CLIENT"
          ? [
              { id: 1, amount: 100, productId: 1, userId: parent.id },
              { id: 2, amount: 150, productId: 2, userId: parent.id },
            ]
          : [];
      },
    });
  },
});

export const Profile = objectType({
  name: "Profile",
  definition(t) {
    t.int("id");
    t.string("bio");
    t.field("role", { type: Role });
    t.int("userId");
  },
});

export const Permissions = objectType({
  name: "Permission",
  definition(t) {
    t.int("id");
    t.string("name");
  },
});

export const Company = objectType({
  name: "Company",
  definition(t) {
    t.int("id");
    t.string("name");
    t.int("userId");
  },
});

export const Sale = objectType({
  name: "Sale",
  definition(t) {
    t.int("id");
    t.float("amount");
    t.int("productId");
    t.int("userId");
  },
});

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.int("id");
    t.string("name");
    t.float("price");
  },
});
export const Permission = objectType({
  name: "Permission",
  definition(t) {
    t.int("id");
    t.string("name");
  },
});

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////TYPES/////////////////////////////////////////////
/////////////////Definición del tipo de entrada Input Object/////////////////////
// export const UserExistsInput = inputType({
//   name: 'UserExistsInput',
//   definition(t) {
//     t.nonNull.id('userId'); // Mark 'userId' as required (optional)
//   },
// });
export const UpddateUserInput = inputObjectType({
  name: "UpddateUserInput",
  definition(t) {
    t.int("id");
    t.boolean("enabled");
    t.string("name");
  },
});

export const CreateUserInput = inputObjectType({
  name: "CreateUserInput",
  definition(t) {
    t.string("name");
    t.string("email");
  },
});

export const CreateProfileInput = inputObjectType({
  name: "CreateProfileInput",
  definition(t) {
    t.string("bio");
    t.field("role", { type: Role });
    t.int("userId");
  },
});

export const CreateSaleInput = inputObjectType({
  name: "CreateSaleInput",
  definition(t) {
    t.float("amount");
    t.int("productId");
    t.int("userId");
  },
});

export const CreateProductInput = inputObjectType({
  name: "CreateProductInput",
  definition(t) {
    t.string("name");
    t.float("price");
  },
});

/////////////////////////////////////////////////////////////////////////////////
///////////////////////////////TYPES/////////////////////////////////////////////
/////////////////Definición de la unión Union////////////////////////////////////
export const SearchResult = unionType({
  name: "SearchResult",
  definition(t) {
    t.members("User", "Profile", "Sale", "Product");
  },
  resolveType: (root) => {
    if (root.name) {
      return "User";
    } else if (root.bio) {
      return "Profile";
    } else if (root.amount) {
      return "Sale";
    } else if (root.price) {
      return "Product";
    } else {
      return null;
    }
  },
});
