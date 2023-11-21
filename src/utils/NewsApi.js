import { baseURL, processResponseServer } from "./constants";

function getCards({ userInput, apiKey, fromDate, toDate, pageSize }) {
  return fetch(
    `${baseURL}/everything?q=${userInput}&apiKey=${apiKey}&from=${fromDate}&to=${toDate}&pageSize=${pageSize}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: apiKey,
      },
    }
  ).then(processResponseServer);
}

function saveCard(token, cardData) {
  return fetch(`${baseURL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(cardData),
  }).then(processResponseServer);
}

function deleteCard(id, token) {
  return (`${baseURL}/articles/:${id}`,
  {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }).then(processResponseServer);
}

export { getCards, saveCard, deleteCard };
