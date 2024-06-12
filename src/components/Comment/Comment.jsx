import styles from './Comment.module.css'

const Comment = ({ reviewer_name, reviewer_rating, comment }) => {
	const renderStars = rating => {
		const stars = []
		for (let i = 1; i <= 5; i++) {
			stars.push(
				<span
					key={i}
					className={i <= rating ? styles.starFilled : styles.starEmpty}
				>
					&#9733;
				</span>
			)
		}
		return stars
	}

	return (
		<div className={styles.comment}>
			<div className={styles.user}>
				<div className={styles.avatar}>{reviewer_name.charAt(0)}</div>
				<h4 className={styles.reviewerName}>{reviewer_name}</h4>
			</div>
			<div className={styles.rating}>{renderStars(reviewer_rating)}</div>
			<p className={styles.text}>{comment}</p>
		</div>
	)
}

export default Comment
