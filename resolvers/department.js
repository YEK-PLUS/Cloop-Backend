module.exports = {
  Query: {
    department: async (user, args, { models }) => await models.Department.findOne({
      where: {
        uid: user.department,
      },
    }),
  },
  Mutation: {

  },
  Department: {
    parent: async (department, args, { models }) => await models.Department.findOne({
        where: {
          uid: department.parent,
        },
      })
  }
};
