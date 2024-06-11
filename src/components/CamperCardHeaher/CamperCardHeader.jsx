/* eslint-disable react/prop-types */
import styles from './CamperCardHeader.module.css'

export const CamperCardHeader = ({ camper }) => {
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.name}>{camper.name}</h3>
				<div className={styles.price}>€{camper.price.toFixed(2)}</div>
			</div>

			<div className={styles.meta}>
				<span className={styles.reviews}>
					⭐ {camper.rating} ({camper.reviews.length} Reviews)
				</span>
				<span className={styles.location}>{camper.location}</span>
			</div>
		</div>
	)
}
