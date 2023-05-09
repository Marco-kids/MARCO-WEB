import axios from "axios";

export const getAllObras = () =>
  axios({
    method: "GET",
    url: "http://189.205.248.189/marcokids/api/api/all-obras",
  });

export const guardarObra = (formData: FormData) => {
  axios({
    method: "post",
    url: "http://189.205.248.189/marcokids/api/api/create-obra",
    data: formData,
  });
};

export const getObraByID = async (_id: string) => {
  const allObras = await getAllObras();

  for (let i = 0; i < allObras.data.length; i++) {
    if (allObras.data[i]._id == _id) {
      return allObras.data[i];
    }
  }

  return;
};

export const deleteObra = async (_id: string) => {
  const url = `http://189.205.248.189/marcokids/api/api/delete-obra/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};

//
//
// NOT WORKING
export const updateObra = () => {
  return axios({
    method: "PUT",
    url: "http://189.205.248.189/marcokids/api/api/update-obra",
    data: {
      _id: "6459b4b41f389866e1a27a94",
      field: "nombre",
      value: "AAAAAAAAAAAAAAAA",
    },
  });
};

export const getModelo = async (modelo: string) => {
  const url = `http://localhost:8080/uploads/${modelo.slice(
    modelo.indexOf("s") + 2
  )}`;

  return axios({
    method: "GET",
    url: url,
  });
};

export const getImagen = async (imagen: string) => {
  const url = `http://localhost:8080/uploads/${imagen.slice(
    imagen.indexOf("s") + 2
  )}`;

  return axios({
    method: "GET",
    url: url,
  });
};
