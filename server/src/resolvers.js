const resolvers = {
    Query: {
        tracksForHome:  async (_, __, {dataSources}) => {
          const data = await dataSources.trackAPI.getTracksForHome();
          return data;
        }
      },
Track:{
    author: async ({authorId}, _, {dataSources}) => {
      const author =await  dataSources.trackAPI.getAuthor(authorId);
      return author;
}
}
};

module.exports = resolvers;