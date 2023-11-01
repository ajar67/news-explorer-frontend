//this is SearchForm where you searh for topics
import './SearchForm.css';
import React from 'react';

const SearchForm = () => {
    return(
        <div className='search'>
            <input className='search__input' type='text' placeholder='Enter topic'/>
            <button className='search__button'>Search</button>
        </div>
    )
};

export default SearchForm;
