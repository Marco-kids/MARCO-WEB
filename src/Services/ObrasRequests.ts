import axios from "axios";
import { APIurl } from "../Utils/Parser";

export const getAllObras = () =>
  axios({
    method: "GET",
    url: `${APIurl}/api/all-obras`,
  });

export const guardarObra = (formData: FormData) => {
  axios({
    method: "post",
    url: `${APIurl}/api/create-obra`,
    data: formData,
  });
};

export const getObraByID = async (_id: string) => {
  const allObras = await getAllObras();

  for (let i = 0; i < allObras.data.length; i++) {
    if (allObras.data[i]._id === _id) {
      return allObras.data[i];
    }
  }

  return;
};

export const deleteObra = async (_id: string) => {
  const url = `${APIurl}/api/delete-obra/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};

//
//
// NOT WORKING
export const updateObra = (_id: string, field: string, value: any) => {
  return axios({
    method: "PUT",
    url: `${APIurl}/api/update-obra`,
    data: {
      id: _id,
      field: field,
      value: value,
    },
  });
};

export const getModelo = async (modelo: string) => {
  const url = `${APIurl}/api/:8080/uploads/${modelo.slice(
    modelo.indexOf("s") + 2
  )}`;

  return axios({
    method: "GET",
    url: url,
  });
};

export const getImagen = async (imagen: string) => {
  const url = `${APIurl}/uploads/${imagen.slice(imagen.indexOf("s") + 2)}`;

  return axios({
    method: "GET",
    url: url,
  });
};
