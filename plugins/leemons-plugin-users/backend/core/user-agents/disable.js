async function disable({ id, ctx }) {
  return ctx.tx.db.UserAgent.findOneAndUpdate(
    { id },
    { disabled: true },
    { new: true, lean: true }
  );
}

module.exports = {
  disable,
};
