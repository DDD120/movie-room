export const sortArray = (array, mode) => {
  return sort[mode](array);
};

const sort = {
  newest: (array) =>
    array.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
  oldest: (array) =>
    array.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)),
  starDesc: (array) => array.sort((a, b) => b.rating - a.rating),
  starAsc: (array) => array.sort((a, b) => a.rating - b.rating),
};
