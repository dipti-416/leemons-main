async function getProfileRole({ profileId, ctx }) {
  const profileRole = await ctx.tx.db.Profiles.findById(profileId).select(['id', 'role']).lean();
  if (profileRole) return profileRole.role;
  return null;
}

module.exports = getProfileRole;
