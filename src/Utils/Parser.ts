export const makeImageURL = (url: string) => {
  return `http://189.205.248.189/marcokids/api/uploads/${url.slice(
    url.indexOf("s") + 2
  )}`;
};
