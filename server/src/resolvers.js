const { users } = require('./database')
const resolvers = {
  Query: {
    allUsers: () => users
  },
}

module.exports = resolvers;
