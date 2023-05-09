import axios from "axios";

export const getAllMuseos = () =>
  axios({
    method: "GET",
    url: "http://localhost:8080/api/museo",
  });

export const guardarMuseo = (formData: FormData) =>
  axios({
    method: "post",
    url: "http://localhost:8080/api/museo",
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
  const url = `http://localhost:8080/api/museo/${_id}`;

  axios({
    method: "delete",
    url: url,
  });
};
