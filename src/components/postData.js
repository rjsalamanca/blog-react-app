import React from 'react';
import PropTypes from 'prop-types';

const PostData = props => {
    const { postData } = props;
    return (
        <>
            <h1>{postData.post_title}</h1>
            <p>{postData.post}</p>
        </>
    )
}

export default PostData;

PostData.propTypes = {
    postData: PropTypes.object
}