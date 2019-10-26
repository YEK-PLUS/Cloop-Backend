const { ApolloServer, AuthenticationError } = require('apollo-server-express');
const jwt = require('jsonwebtoken');
const schema = require('../schemas');
const resolvers = require('../resolvers');
const models = require('../models');

const getMe = async (req) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization;
      return await jwt.verify(token, settings.secretKeys.jwt);
    } catch (e) {
      throw new AuthenticationError(settings.messages.sessionExpired);
    }
  }
  return new AuthenticationError(settings.messages.needAuthToken);
};
module.exports = (app) => {
  const apollo = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: async ({ req }) => {
      const me = await getMe(req);
      return {
        models,
        me,
      };
    },
  });
  apollo.applyMiddleware({ app, path: '/graphql' });
  return apollo;
};
