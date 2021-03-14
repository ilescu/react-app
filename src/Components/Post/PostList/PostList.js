import React from "react";
import PostListItem from "../PostListItem";
import './PostList.scss';


const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        return (
            <li className='list-group-item'>
                <PostListItem {...item}/>
            </li>
        )
    });


    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;