const typeDefs = `
  type Query {
    allUsers: [User]
  }

  type User {
    _id: ID
    firstName: String,
    lastName: String
  }
`

module.exports = typeDefs;
