// api/schema.ts
import { makeSchema } from "nexus";
import { Query } from "./resolvers/query";
import { Mutation } from "./resolvers/mutation";
import { Subscription } from "./resolvers/subscription";
import {
  Role,
  User,
  Profile,
  Sale,
  Product,
  CreateUserInput,
  CreateProfileInput,
  CreateSaleInput,
  CreateProductInput,
  SearchResult,
  Company,
  Permission,
} from "./types";

const allTypes = [
  Query,
  Mutation,
  Subscription,
  Permission,
  Role,
  User,
  Company,
  Profile,
  Sale,
  Product,
  CreateUserInput,
  CreateProfileInput,
  CreateSaleInput,
  CreateProductInput,
  SearchResult,
];

const generatedSchema = makeSchema({
  types: allTypes,
});

export { generatedSchema };
