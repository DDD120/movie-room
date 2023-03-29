import dayjs from "dayjs";

export const arrayDeduplication = (list) => {
  return list.filter(
    (item, index, array) =>
      index === array.findIndex((data) => data.id === item.id)
  );
};

export const getYear = (date) => {
  return dayjs(date).year();
};

export const isNull = (string) => {
  const blank_pattern = /^\s+|\s+$/g;
  return string.replace(blank_pattern, "") === "";
};
