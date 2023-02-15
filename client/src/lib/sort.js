import dayjs from "dayjs";

export const sortArray = (array, mode) => {
  return sort[mode](array);
};

const sort = {
  newest: (array) =>
    array.sort((a, b) => dayjs(b.updatedAt) - dayjs(a.updatedAt)),
  oldest: (array) =>
    array.sort((a, b) => dayjs(a.updatedAt) - dayjs(b.updatedAt)),
  starDesc: (array) => array.sort((a, b) => b.rating - a.rating),
  starAsc: (array) => array.sort((a, b) => a.rating - b.rating),
};
