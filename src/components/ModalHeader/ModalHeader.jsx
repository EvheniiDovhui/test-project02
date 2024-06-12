import React, { useState } from 'react'
import styles from './ModalHeader.module.css'

const ModalHeader = ({ camper }) => {
	const [isExpanded, setIsExpanded] = useState(false)

	const handleToggleExpand = () => {
		setIsExpanded(!isExpanded)
	}

	return (
		<div className={styles.header}>
			<div className={styles.titleContainer}>
				<h2 className={styles.title}>{camper.name}</h2>
				<span className={styles.price}>€{camper.price.toFixed(2)}</span>
			</div>
			<div className={styles.meta}>
				<span className={styles.reviewCount}>
					⭐ {camper.rating} ({camper.reviews.length} Reviews)
				</span>
				<span className={styles.location}>{camper.location}</span>
			</div>
			<div className={styles.gallery}>
				{camper.gallery.map((image, index) => (
					<img
						key={index}
						src={image}
						alt={camper.name}
						className={styles.image}
					/>
				))}
			</div>

			<p
				className={`${styles.description} ${isExpanded ? styles.expanded : ''}`}
			>
				{camper.description}
			</p>
			<button onClick={handleToggleExpand} className={styles.toggleButton}>
				{isExpanded ? 'Show less' : 'Show more'}
			</button>
		</div>
	)
}

export default ModalHeader
