import React,  { useState, useEffect } from "react";
import Post from "../Post/Post";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexWrap: "wrap",
		textAlign: "center",
		margin: "auto",
		justifyContent: "center",
	},
});

const Posts = () => {const classes = useStyles();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((data) => setPosts(data))
			.catch((error) => alert(error));
	}, []);

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Posts : {posts.length}</h1>

         
        <div className={classes.root}>
         {posts.map((post) => (
        <Post key={post.id} post={post} />
    ))}
</div>
        </div>
    );
};

export default Posts;