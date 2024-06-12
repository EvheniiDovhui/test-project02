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

// import React from 'react'
// import styles from './Reviews.module.css'

// const Reviews = ({ reviews }) => (
// 	<div className={styles.reviews}>
// 		<h3 className={styles.title}>Reviews</h3>
// 		{reviews.map((review, index) => (
// 			<div key={index} className={styles.review}>
// 				<div className={styles.reviewer}>
// 					<span>{review.reviewer_name}</span>
// 					<span>{'★'.repeat(review.reviewer_rating)}</span>
// 				</div>
// 				<p>{review.comment}</p>
// 			</div>
// 		))}
// 	</div>
// )

// export default Reviews
