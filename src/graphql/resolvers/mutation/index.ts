import {
  booleanArg,
  idArg,
  list,
  mutationType,
  nonNull,
  stringArg,
} from "nexus";
import {
  CreateProductInput,
  CreateProfileInput,
  CreateSaleInput,
  CreateUserInput,
  Product,
  Profile,
  Sale,
  UpddateUserInput,
  User,
} from "../../types";

// Definición de la mutación Mutation
export const Mutation = mutationType({
  definition(t) {
    t.field("createUser", {
      type: User,
      args: {
        data: CreateUserInput,
      },
      resolve: (parent, args) => {
        const newUser = {
          id: Math.floor(Math.random() * 1000),
          name: args.data.name,
          email: args.data.email,
          role: "CLIENT",
        };
        return newUser;
      },
    });
    t.field("editUserProfile", {
      type: User,
      args: {
        id: nonNull(idArg()),
        name: stringArg(),
        role: stringArg(),
        permissions: list(stringArg()),
        enabled: booleanArg(),
      },
      resolve: (parent, args, { prisma }) => {
        const { id, permissions, ...data } = args;
        const objPermissionsIds = permissions?.map((id: any) => {
          return { id: parseInt(id) };
        });

        return prisma.user.update({
          where: {
            id: parseInt(id),
          },
          data: {
            name: data.name,
            role: data.role,
            permissions: {
              set: objPermissionsIds,
            },
            enabled: data.enabled,
          },
        });
      },
    });

    t.field("createProfile", {
      type: Profile,
      args: {
        data: CreateProfileInput,
      },
      resolve: (parent, args) => {
        const newProfile = {
          id: Math.floor(Math.random() * 1000),
          bio: args.data.bio,
          role: args.data.role,
          userId: args.data.userId,
        };
        return newProfile;
      },
    });

    t.field("createSale", {
      type: Sale,
      args: {
        data: CreateSaleInput,
      },
      resolve: (parent, args) => {
        if (args.data.userId !== "CLIENT") {
          const newSale = {
            id: Math.floor(Math.random() * 1000),
            amount: args.data.amount,
            productId: args.data.productId,
            userId: args.data.userId,
          };
          return newSale;
        }
        return null;
      },
    });

    t.field("createProduct", {
      type: Product,
      args: {
        data: CreateProductInput,
      },
      resolve: (parent, args) => {
        const newProduct = {
          id: Math.floor(Math.random() * 1000),
          name: args.data.name,
          price: args.data.price,
        };
        return newProduct;
      },
    });
  },
});
