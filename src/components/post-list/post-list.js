import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete, onToggle}) => {
    const elements = posts.map((item) => {
        // const {id, ...itemProps} = item;
        return (
            <li key={item.id} className="list-group-item">
                <PostListItem
                    // {...itemProps}
                    {...item}
                    onDelete={() => onDelete(item.id)}
                    onToggleImportant={() => onToggle(item.id, 'important')}
                    onToggleLiked={() => onToggle(item.id, 'like')}/>
            </li>
        )
    });
    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;