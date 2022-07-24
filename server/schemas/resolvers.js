const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userProfile = await User.findOne({
          _id: context.user._id,
        }).select("-__v -password");
        return userProfile;
      }
      throw new AuthenticationError("You are not logged in!");
    },
  },
  Mutation: {},
};

module.exports = resolvers;
