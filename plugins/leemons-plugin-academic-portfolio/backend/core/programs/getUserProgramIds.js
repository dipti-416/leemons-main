const _ = require('lodash');

async function getUserProgramIds({ ctx, teacherTypeFilter }) {
  const { userSession } = ctx.meta;
  const userAgentIds = _.map(userSession.userAgents, 'id');
  const [studentClasses, teacherClasses] = await Promise.all([
    ctx.tx.db.ClassStudent.find({ student: userAgentIds }).lean(),
    ctx.tx.db.ClassTeacher.find({
      teacher: userAgentIds,
      ...(teacherTypeFilter ? { type: teacherTypeFilter } : {}),
    }).lean(),
  ]);

  const classeIds = _.uniq(_.map(studentClasses, 'class').concat(_.map(teacherClasses, 'class')));

  const classes = await ctx.tx.db.Class.find({ id: classeIds }).select(['program']).lean();
  return _.uniq(_.map(classes, 'program'));
}

module.exports = { getUserProgramIds };