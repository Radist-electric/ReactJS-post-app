import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

const App = () => {
    let data = [
        5,
        "Hello, People!!!",
        null,
        undefined,
        [1, 2],
        true,
        {label: "Hey guys! Let's go to learn React!", important: true, id: 'sdfe'},
        {label: "How cool is that!", important: false, id: 'dfdf'},
        {label: "You need to work harder in order to achieve your goal! Hey guys! Wake up and go ahead!", important: false, id: 'ghgw'}
    ]
    data = data.filter((el) => {
        return (typeof el ==='object' && el !== null && el instanceof Array !== true);
    });

    return (
        <div className="app">
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;

