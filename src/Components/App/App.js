import React from "react";

import Header from "../Header";
import SearchPanel from "../SearchPanel";
import PostStatusFilter from "../Post/PostStatusFilter";
import PostList from "../Post/PostList";
import PostAddForm from "../Post/PostAddForm";

import './App.css'

const App = () => {
    return (
        <div className="app">
            <Header/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
    )
}


export default App;