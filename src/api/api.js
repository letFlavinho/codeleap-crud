import axios from "axios";
const api = axios.create({
  baseURL: "https://63384e1a937ea77bfdbde275.mockapi.io/",
});

export function postsGET() {
  return {
    url: baseURL,
    opitions: {
      method: "GET",
    },
  };
}

export function postsPOST(body) {
  return {
    url: baseURL,
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function postPatch(id, body) {
  return {
    url: baseURL + id + "/",
    options: {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function postsDelete(id) {
  return {
    url: baseURL + id + "/",
    options: {
      method: "DELETE",
      headers: {
        "Content-Type": "cors",
      },
    },
  };
}

export default api;
