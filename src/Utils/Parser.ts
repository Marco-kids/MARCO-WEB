export const makeImageURL = (url: string) => {
  return `http://localhost:8080/uploads/${url.slice(url.indexOf("s") + 2)}`;
};
