const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  users: [User!]
  user(uid: String!): User
  me: User
  birthdays(date: String!,type:String!): [User!]!
}
extend type Mutation {
  signUp(
    username: String!
    mail: String!
    password: String!
  ): Token!
  signIn(login: String!, password: String!): Token!
}
type Token {
  token: String!
}
type User {
  uid: String!
  username: String!
  mail: String!
  details: UserDetail!
  avatar:Media!
  rank: Rank!
  authority : [Authority!]
}
`;
