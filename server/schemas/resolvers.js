const { AuthenticationError } = require("apollo-server-errors");
const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.username) {
        const userProfile = await User.findOne({
          _id: context._id,
        }).select("-__v -password");
        return userProfile;
      }
      throw new AuthenticationError("You are not logged in!");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Your login credentals are incorrect!");
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError("Your password is incorrect!");
      }
      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      if (context.username) {
        const updatedGoodRead = await User.findOneAndUpdate(
          { _id: context._id },
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );
        return updatedGoodRead;
      }
      throw new AuthenticationError("Please login first!");
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.username) {
        const updatedGoodRead = await User.findOneAndUpdate(
          { _id: context._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
        return updatedGoodRead;
      }
      throw new AuthenticationError("Please login first!");
    },
  },
};

module.exports = resolvers;
