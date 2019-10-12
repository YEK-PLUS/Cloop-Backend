const { gql } = require('apollo-server-express');
module.exports = gql`
extend type Query {
  userDetails: [UserDetail!]!
  userDetail(userUid: String!): UserDetail!
}
type UserDetail {
    userUid: String!
    country: String!
    location: String!
    photo: String!
    firstName: String!
    lastName: String!
    phone: String!
    superVisor: String!
    visor: User!
}
`;
