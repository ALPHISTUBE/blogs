import React from 'react';
import './Bookmark.css'
const Bookmark = (props) => {
    console.log(props.element.blogs);

    return (
        <div className='bookmark'>
            <h3>Spent time on read: min</h3>
            <div>
                
            </div>
        </div>
    );
};

export default Bookmark;