export const arrayDeduplication = (list) => {
  return list.filter(
    (item, index, array) =>
      index === array.findIndex((data) => data.id === item.id)
  );
};
