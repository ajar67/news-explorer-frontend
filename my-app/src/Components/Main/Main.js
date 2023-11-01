// ths is Main... got some text heading maybe, little paragraph, search button form
import './Main.css';
import React from 'react';
import SearchForm from '../SearchForm/SearchForm';

const Main = () => {
    return (
        <div className='main__section'>
            <div>
            <h1 className='main__title'>What's going on in the world?</h1>
            <p className='main__para'>Find the latest news on any topic and save them in your personal account.</p>
            </div>
            <div>
                <SearchForm />
            </div>
        </div>
    )
}

export default Main;
