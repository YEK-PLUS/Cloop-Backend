const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  rank(rank: String!): Rank!
  ranks:[Rank!]!
  authority:Authority!
}
type Rank {
  uid: String!
  rank: String!
  name:String!
}
type Authority {
  name: String!
  level: ID!
}
`;
