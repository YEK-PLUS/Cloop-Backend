const _ = require('lodash');

module.exports = {
  Query: {
    notification: async (parent, { uid }, { models }) => await models.Notification.findOne({
      where: {
        uid,
      },
    }),
    notifications: async (parent, args, { models }) => await models.Notification.findAll(),
    myNotifications: async (parent, args, { models, me }) => {
      const through = await models.Notification.findAll({
        include: [
          {
            as: 'user',
            model: models.UserNotification,
            where: {
              users_uid: me.uid,
            },
          },
        ],
      });
      return through;
    },
    /* eslint-disable camelcase */

    departmentNotifications: async (parent, { company_departments_uid }, { models }) => {
      const through = await models.Notification.findAll({
        include: [
          {
            model: models.DepartmentNotification,
            where: {
              company_departments_uid,
            },
          },
        ],
      });
      return through;
    },
    rankNotifications: async (parent, { company_ranks_rank }, { models }) => {
      const through = await models.Notification.findAll({
        include: [
          {
            model: models.RankNotification,
            where: {
              company_ranks_rank,
            },
          },
        ],
      });
      return through;
    },
  },
  /* eslint-enable camelcase */

  Mutation: {

  },
  Notification: {
    visible: async (notification, args, { models, me }) => {
      if (_.has(notification, ['users', 'visible'])) {
        return notification.user.visible;
      }
      const { uid } = notification;
      const query = await models.Notification.findOne({
        where: {
          uid,
        },
        include: [
          {
            as: 'user',
            model: models.UserNotification,
            where: {
              users_uid: me.uid,
            },
          },
        ],
      });
      return query.user.visible;
    },
  },
};
