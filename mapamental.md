
# GraphQL API Mind Map

## Overview
- GraphQL API
  - Types
    - User
    - Profile
    - Sale
    - Product
  - Enums
    - Role
  - Input Types
    - CreateUserInput
    - CreateProfileInput
    - CreateSaleInput
    - CreateProductInput
  - Unions
    - SearchResult

## Resolvers
- Query
  - Users
  - Profiles
  - Sales
  - Products
- Mutation
  - CreateUser
  - CreateProfile
  - CreateSale
  - CreateProduct
- Subscription
  - UserCreated
  - SaleCreated

## Folder Structure
- src
  - api
    - schema.ts
    - resolvers
      - query.ts
      - mutation.ts
      - subscription.ts
    - types
      - user.ts
      - profile.ts
      - sale.ts
      - product.ts
      - enums.ts
      - inputs.ts
      - unions.ts
  - index.ts
  - server.ts
  - context.ts
- package.json
- README.md