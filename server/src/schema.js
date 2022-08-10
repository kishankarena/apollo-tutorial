const { gql } = require('apollo-server');

exports.typeDefs = gql`
  "A track is a group of modules that teaches about specific topic"
  type Query {
    tracksForHome: [Track!]!
  }
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }
  "Author of a complete track"
  type Author {
    id: ID!
    name: String!
    photo: String
  }
`;
