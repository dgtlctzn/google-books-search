import axios from "axios";

export default {
  getBooks: function (search) {
    return axios({
      method: "GET",
      url: `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${process.env.API_KEY}`,
    });
  },
  postBook: function (bookLink) {
    return axios({
      method: "POST",
      url: "/api/books",
      data: {
        link: bookLink
      },
    });
  },
  getSavedBooks: function () {
    return axios({
      method: "GET",
      url: "/api/books",
    })
  }
};
