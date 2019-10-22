const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  media: Media
}
type Media {
  uid: String!
  media:String!
}
`;
