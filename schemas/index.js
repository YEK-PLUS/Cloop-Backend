const { gql } = require('apollo-server-express');
const userSchema = require('./user');
const userDetailSchema = require('./userDetail');

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`;
module.exports = [linkSchema, userSchema, userDetailSchema];
