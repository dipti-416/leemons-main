async function setUserDatasetInfo({ userId, value, ctx }) {
  return ctx.tx.call('dataset.dataset.setValues', {
    locationName: 'user-data',
    pluginName: 'users',
    values: value,
    userAgent: ctx.meta.userSession.userAgents,
    target: userId,
  });
}

module.exports = { setUserDatasetInfo };
