const createTokenUser = (user) => {
  return {
    name: user.name, userId: user._id, username: user.username, role: user.role,

  };
};

module.exports = createTokenUser;
