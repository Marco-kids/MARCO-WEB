import axios from "axios";

export const getAllLocaciones = () =>
  axios({
    method: "GET",
    url: "http://189.205.248.189/marcokids/api/api/locations",
  });

export const deleteLocacion = (_id: string) => {
  const url = `http://189.205.248.189/marcokids/api/api/locations/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};
