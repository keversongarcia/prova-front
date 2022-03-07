export const API_URL = "https://prova.deploy.profranchising.com.br";

export const TOKEN =
  "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiNjc2YjM4ZC1mYjJjLTRlYzAtOWExMC1jNDVkOTJiM2JkNjlAcHJvZnJhbmNoaXNpbmcuY29tLmJyIiwiZXhwIjoxNjQ2NjcyNjQ0LCJpYXQiOjE2NDY2Mjk0NDR9.-qUuRxk16Wc2xgX90XtfBn5DFJkv8byY050MSQ3CJ9opbZpqo8R0rlWroj8v5ST0tuweqenvTmxVsQaNCjnm_Q";

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

export function PRODUCTLIST_GET() {
  return {
    url: API_URL + "/product/list",
    options: {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    },
  };
}
