export const me = (user) => {
  return {
    id: user._id,
    profile: {
      nickname: user.profile.nickname,
      thumbnail: user.profile.thumbnail,
    },
    email: user.email,
    reviews: user.reviews,
  };
};
