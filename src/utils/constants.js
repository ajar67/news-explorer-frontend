export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://api.news-explorer.chickenkiller.com"
    : "http://localhost:3002";

///before publication change baseURL to https://nomoreparties.co/news/v2  newsapi.org/v2

export const apiURL = "https://nomoreparties.co/news/v2";

export const processResponseServer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

export const apiKey = "d37f40239d03431590e8c425524f1f27";
