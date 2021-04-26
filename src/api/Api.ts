import axios from "axios";
import { Photo } from "../interfaces/IPhoto";

const URL = "https://www.flickr.com/services/rest/";
const URL_MY_SERVER = "https://test-task-elinext.herokuapp.com/";
const api_key = "be7600b3bff8c44546825c9906aeedb8";
const format = "json";

export const Api = {
  getPhotosByTags: async (tags: string, page: number) => {
    const res = await axios
      .get(URL + "?method=flickr.photos.search", {
        params: {
          api_key,
          tags,
          per_page: 20,
          page,
          format,
          nojsoncallback: 1,
        },
      })
      .then(({ data }) => {
        if (data.stat === "fail") throw new Error(data.message);
        console.log(data);

        return data.photos;
      })
      .catch((e) => console.log(e));
    return res;
  },

  registration: async (name: string, password: string, email: string) => {
    const res = await axios
      .post(URL_MY_SERVER + "auth/registration", { name, password, email })
      .then((response: any) => {
        return response.message;
      })
      .catch((e) => e.message);
    return res;
  },

  authorization: async (password: string, email: string) => {
    const res = await axios
      .post(URL_MY_SERVER + "auth/login", {
        password,
        email,
      })
      .then((response: any) => {
        return { name: response.name, token: response.token };
      })
      .catch((e) => e.message);
    return res;
  },

  deleteUserPhotoBySecretKey: async (token: string, secret: string) => {
    const res = await axios
      .delete(URL_MY_SERVER + `users/images?secret=${secret}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => ({ status: 200 }))
      .catch((e) => e.message);
    return res;
  },

  addUserPhoto: async (token: string, photo: Photo) => {
    const res = await axios
      .put(URL_MY_SERVER + "users/images", photo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        return response.images;
      })
      .catch((e) => e.message);
    return res;
  },

  getAllUserPhoto: async (token: string) => {
    const res = await axios
      .get(URL_MY_SERVER + "users/images", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response: any) => {
        return response.images;
      })
      .catch((e) => e.message);
    return res;
  },
};
