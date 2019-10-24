const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  rank(rank: String!): Rank!
  ranks:[Rank!]!
  authority:Authority!
}
type Rank {
  id: ID!
  rank:ID!
}
type Authority {
  name: String!
  level: ID!
}
`;
