import axios from "axios";
import { APIurl } from "../Utils/Parser";

export const getAllMuseos = () =>
  axios({
    method: "GET",
    url: `${APIurl}/api/museo`,
  });

export const guardarMuseo = (formData: FormData) =>
  axios({
    method: "post",
    url: `${APIurl}/api/museo`,
    data: formData,
  });

export const getMuseoById = async (_id: string) => {
  const allMuseos = await getAllMuseos();

  for (let i = 0; i < allMuseos.data.length; i++) {
    if (allMuseos.data[i]._id == _id) {
      return allMuseos.data[i];
    }
  }

  return;
};

export const deleteMuseo = async (_id: string) => {
  const url = `${APIurl}/api/museo/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};

export const activateMuseo = async (_id: string) => {
  const url = `${APIurl}/api/museo/activate/${_id}`;

  axios({
    method: "PUT",
    url: url,
  });
};

export const updateObrasById = async (_id: string, obras: string[]) => {
  const url = `${APIurl}/api/museo/obras/${_id}`;

  axios({
    method: "PUT",
    url: url,
    data: {
      obras: obras,
    },
  });
};

export const updateLocationsById = async (_id: string, locations: string[]) => {
  const url = `${APIurl}/api/museo/locations/${_id}`;

  axios({
    method: "PUT",
    url: url,
    data: {
      locations: locations,
    },
  });
};
