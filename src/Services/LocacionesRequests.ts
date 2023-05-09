import axios from "axios";

export const getAllLocaciones = () =>
  axios({
    method: "GET",
    url: "http://localhost:8080/api/locations",
  });

export const deleteLocacion = (_id: string) => {
  const url = `http://localhost:8080/api/locations/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};
