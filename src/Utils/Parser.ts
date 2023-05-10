export const APIurl = "http://189.205.248.189/marcokids/api";
// export const APIurl = "http://localhost:8080";

export const makeImageURL = (url: string) => {
  return `${APIurl}/uploads/${url.slice(url.indexOf("s") + 2)}`;
};
