const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  department(uid: String!): Department!
  departments:[Department!]!
}
type Department {
  uid: String!
  name: String!
  parent : Department
}
`;
