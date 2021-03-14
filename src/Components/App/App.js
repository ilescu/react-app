import React from "react";

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../Post/PostStatusFilter";
import PostList from "../Post/PostList";
import PostAddForm from "../Post/PostAddForm";

import './App.scss'

const App = () => {

    const data = [
        {label: 'Going to learn React', important: true},
        {label: 'That is so good', important: false},
        {label: 'I need a break...', important: false}
    ]

    return (
        <div className="app">
            <Header/>
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