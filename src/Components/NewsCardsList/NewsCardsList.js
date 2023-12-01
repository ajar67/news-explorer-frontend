//this is the section that the cards will be rendered on page

import React from "react";
import "./NewsCardsList.css";
import NewsCard from "../NewsCard/NewsCard";

const NewsCardsList = ({
  cardsData,
  visibleCards,
  onLikeCard,
  loggedIn,
  searchKeyword,
}) => {
  return (
    <ul className="cards">
      {cardsData.slice(0, visibleCards).map((card) => (
        <NewsCard
          key={card.url}
          date={card.publishedAt}
          title={card.title}
          source={card.source}
          text={card.description}
          author={card.source.name}
          image={card.urlToImage}
          onLikeCard={onLikeCard}
          link={card.url}
          loggedIn={loggedIn}
          searchKeyword={searchKeyword}
        />
      ))}
    </ul>
  );
};

export default NewsCardsList;
