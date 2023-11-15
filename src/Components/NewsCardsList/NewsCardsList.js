//this is the section that the cards will be rendered on page

import React from "react";
import "./NewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardsList = ({ cardsData, visibleCards, onLikeCard, loggedIn }) => {
  return (
    <ul className="cards__list">
      {cardsData.slice(0, visibleCards).map((card) => (
        <NewsCard
          key={card.url}
          date={card.publishedAt}
          title={card.title}
          description={card.description}
          author={card.source.name}
          image={card.urlToImage}
          onLikeCard={onLikeCard}
          cardUrl={card.url}
          loggedIn={loggedIn}
        />
      ))}
    </ul>
  );
};

export default NewsCardsList;
