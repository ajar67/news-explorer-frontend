export const baseURL = `https://nomoreparties.co/news/v2`;

///before publication change baseURL to https://nomoreparties.co/news/v2  newsapi.org/v2

export const processResponseServer = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Error: ${res.status}`);
};

export const apiKey = "d37f40239d03431590e8c425524f1f27";
