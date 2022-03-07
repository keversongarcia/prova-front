import axios from "axios";

export const API_URL = "https://prova.deploy.profranchising.com.br";

export const http = axios.create({
  baseURL: API_URL,
});

export function PRODUCTLIST_GET() {
  const token = localStorage.getItem("token");
  return {
    url: API_URL + "/product/list",
    options: {
      method: "GET",
      headers: {
        Authorization: token,
      },
    },
  };
}
