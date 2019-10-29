const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  notification(uid: String!): Notification!
  notifications:[Notification!]
  myNotifications:[Notification!]
  departmentNotifications(company_departments_uid: String!):[Notification!]
  rankNotifications(company_ranks_rank: String!):[Notification!]
}
type Notification {
  uid: String!
  notification: String!
  visible:String!
}
`;
