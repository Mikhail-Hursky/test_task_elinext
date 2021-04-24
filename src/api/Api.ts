import axios from "axios";

const URL = "https://www.flickr.com/services/rest/";
const api_key = "be7600b3bff8c44546825c9906aeedb8";
const format = "json";

export const Api = {
  getPhotoById: async (tags: string, per_page = 20, page = 1) => {
    const res = await axios
      .get(URL + "?method=flickr.photos.search", {
        params: {
          api_key,
          tags,
          per_page,
          page,
          format,
          nojsoncallback: 1,
        },
      })
      .then(({ data }) => {
        if (data.stat === "fail") throw new Error(data.message);

        return data;
      })
      .catch((e) => console.log(e));
    return res;
  },
};
