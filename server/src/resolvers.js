const resolvers = {
  Query: {
    tracksForHome: (_, __, { dataSources }) => {
      const data = dataSources.trackAPI.getTracksForHome();
      return data;
    },
  },
  Track: {
    author: ({ authorId }, _, { dataSources }) => {
      const author = dataSources.trackAPI.getAuthor(authorId);
      return author;
    },
  },
};

module.exports = resolvers;
