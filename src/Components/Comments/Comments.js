import React, { useEffect, useState } from 'react'; 
import { makeStyles } from "@material-ui/core";
import CommentImage from '../CommentImage/CommentImage';


const useStyles = makeStyles({
	userImage: {
		borderRadius: "50%",
		marginRight: "20px",
	},
	comment: {
		display: "flex",
		border: "1px solid lightgray",
		margin: "20px auto",
		padding: "20px",
		borderRadius: "20px",
		width: "80%",
		boxShadow: "5px 5px 10px gray",
		backgroundColor: "whitesmoke",
	},
	userCommentSection: {
		textAlign: "left",
		paddingLeft:"20px",
	},
});

const Comments = ({ comments }) => {
	const classes = useStyles();
	const totalComments = comments.length;
	
// console.log(images)
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Comments: {comments.length}</h1>
		
			
				{
					comments.map(comment => 
						<div className={classes.comment}>
							<div className={classes.userImageSection}>
								<CommentImage id={comment.id}></CommentImage>
							</div>
							<div className={classes.userCommentSection}>
								<h3>{comment.name}</h3>
								<h4>{comment.email}</h4>
								<p>{comment.body}</p>
							</div>
						</div>
					)
					
				}
        </div>
    );
};

export default Comments;