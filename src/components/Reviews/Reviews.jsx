import React from 'react'
import CommentList from '../ComentList/CommentList'

import styles from './Reviews.module.css'

const Reviews = ({ reviews }) => {
	return (
		<div className={styles.reviewsContainer}>
			<CommentList reviews={reviews} />
		</div>
	)
}

export default Reviews
