const _ = require('lodash');
const userResolve = require('./user');
const userDetail = require('./userDetail');
const media = require('./media');
const rank = require('./rank');
const translate = require('./translate');

let Query = {};
let Mutation = {};
let Other = {};
let NoQuery = {};
let NoMutation = {};
let NoOther = {};

[userResolve, userDetail, media, rank,translate].map((resolve) => {
  Query = { ...resolve.Query, ...Query };
  Mutation = { ...resolve.Mutation, ...Mutation };
  Other = { ..._.omit(resolve, ['Query', 'Mutation']), ...Other };
  return true;
});
[translate].map((resolve) => {
  NoQuery = { ...resolve.Query, ...Query };
  NoMutation = { ...resolve.Mutation, ...Mutation };
  NoOther = { ..._.omit(resolve, ['Query', 'Mutation']), ...Other };
  return true;
});

module.exports = {
  Auth:{
    Query,
    Mutation,
    ...Other,
  },
  NoAuth:{
    Query:NoQuery,
    Mutation:NoMutation,
    ...NoOther,
  },
};
