const userResolve = require('./user')
const messageResolve = require('./message')
const _ = require('lodash')


let Query = {};
let Mutation = {};
let Other = {};

[userResolve,messageResolve].map((resolve)=>{
  Query = {...resolve.Query,...Query};
  Mutation = {...resolve.Mutation,...Mutation};
  Other = {..._.omit(resolve,['Query','Mutation']),...Other};
})

module.exports = {
  Query,
  Mutation,
  ...Other
}
