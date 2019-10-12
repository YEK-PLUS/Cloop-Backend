const userResolve = require('./user')
const userDetail = require('./userDetail')
const _ = require('lodash')


let Query = {};
let Mutation = {};
let Other = {};

[userResolve,userDetail].map((resolve)=>{
  Query = {...resolve.Query,...Query};
  Mutation = {...resolve.Mutation,...Mutation};
  Other = {..._.omit(resolve,['Query','Mutation']),...Other};
})

module.exports = {
  Query,
  Mutation,
  ...Other
}
