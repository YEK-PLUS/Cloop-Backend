const { gql } = require('apollo-server-express');
const userSchema = require('./user');
const userDetailSchema = require('./userDetail');
const mediaSchema = require('./media');
const rankSchema = require('./rank');
const translateSchema = require('./translate');
const departmentSchema = require('./department');
const notificationSchema = require('./notification');

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
module.exports = [linkSchema, userSchema, userDetailSchema, mediaSchema, rankSchema,translateSchema,departmentSchema,notificationSchema];
