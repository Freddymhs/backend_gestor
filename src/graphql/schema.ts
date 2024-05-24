type Producto {
    id: ID!
    nombre: String!
    precio: Float!
    stock: Int!
  }
  
  type Query {
    productos: [Producto!]!
  }
  