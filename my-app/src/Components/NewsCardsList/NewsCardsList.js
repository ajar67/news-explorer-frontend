//this is the section that the cards will be rendered on page

import React from "react";
import './NewsCardsList.css';
import NewsCard from '../NewsCard/NewsCard';

const NewsCardsList = () => {
  return (
    <div className='card__list'>
      <NewsCard />
    </div>
  );
};

export default NewsCardsList;
