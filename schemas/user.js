const { gql } = require('apollo-server-express');
module.exports = gql`
extend type Query {
  users: [User!]
  user(uid: String!): User
  me: User
}
type User {
  uid: String!
  username: String!
  password: String!
  mail: String!
  messages: [Message!]
}
`;
