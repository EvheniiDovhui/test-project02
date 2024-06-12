import React from 'react'
import styles from './CommentList.module.css'
import Comment from '../Comment/Comment'

const CommentList = ({ reviews }) => {
	return (
		<div className={styles.commentList}>
			{reviews.map((review, index) => (
				<Comment
					key={index}
					reviewer_name={review.reviewer_name}
					reviewer_rating={review.reviewer_rating}
					comment={review.comment}
				/>
			))}
		</div>
	)
}

export default CommentList
