export const normalizePath = (str) => {
  const doubleQuote = '\"';
  let arr = [];
  if (str.includes(doubleQuote)) {
    arr = str.trim().split('\"');
    arr = arr.map(v => v.trim());
  } else {
    arr = str.trim().split(' ');
  }
  arr = arr.filter(v => v !== '');
  return arr;
};