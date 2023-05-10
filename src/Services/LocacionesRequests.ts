import axios from "axios";
import { APIurl } from "../Utils/Parser";

export const getAllLocaciones = () =>
  axios({
    method: "GET",
    url: `${APIurl}/api/locations`,
  });

export const deleteLocacion = (_id: string) => {
  const url = `${APIurl}/api/locations/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};
