export const API_URL = "https://prova.deploy.profranchising.com.br";

export function TOKEN_POST(body) {
  return {
    url: API_URL + "/auth/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

export function TOKEN_GET(token) {
  return {
    url: API_URL + "/auth/login",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    },
  };
}
