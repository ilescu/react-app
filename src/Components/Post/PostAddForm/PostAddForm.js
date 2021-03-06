import React from "react";

import './PostAddForm.scss';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
               type="text"
               placeholder="What are you thinking now?"
               className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">Add post</button>
        </form>
    )
}

export default PostAddForm;