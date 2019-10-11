const { ApolloServer,gql  } =require('apollo-server-express');
const schema = require('../schemas')
const resolvers = require('../resolvers')
const models = require('../models')
module.exports = (app) => {
  const apollo = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: {
      models,
    },
  });
  apollo.applyMiddleware({ app, path: '/graphql' });
  return apollo;
};
