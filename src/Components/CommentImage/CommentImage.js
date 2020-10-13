import React, { useEffect, useState } from 'react';

const CommentImage = (props) => {
    const id = props.id
    const [image, setImage] = useState({})
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
		.then(res => res.json())
		.then(data => setImage(data))
    }, [])
    console.log(image)
    return (
        <div>
            <img style={{borderRadius: '50%'}} src={image.thumbnailUrl} alt={image.title}/>
        </div>
    );
};

export default CommentImage;