const { gql } = require('apollo-server-express');

module.exports = gql`
extend type Query {
  translates: [TranslatedWord!]
}
type Translate {
  translated_words: String!
  word: String!
  lang: String!
  translated_word: String!
}
type TranslatedWord {
  word:String!
  uid:String!
  translate:[Translate!]
}
`;
