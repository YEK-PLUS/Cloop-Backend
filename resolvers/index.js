const _ = require('lodash');
const userResolve = require('./user');
const userDetail = require('./userDetail');


let Query = {};
let Mutation = {};
let Other = {};

[userResolve, userDetail].map((resolve) => {
  Query = { ...resolve.Query, ...Query };
  Mutation = { ...resolve.Mutation, ...Mutation };
  Other = { ..._.omit(resolve, ['Query', 'Mutation']), ...Other };
  return true;
});

module.exports = {
  Query,
  Mutation,
  ...Other,
};
