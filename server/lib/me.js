export const me = (user) => {
  return {
    id: user._id,
    nickname: user.nickname,
    thumbnail: user.thumbnail,
    email: user.email,
  };
};
