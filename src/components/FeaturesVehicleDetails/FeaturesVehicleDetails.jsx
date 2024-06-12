import React from 'react'
import styles from './FeaturesVehicleDetails.module.css'

const formatString = str => {
	return str
		.split(/(?=[A-Z])/)
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ')
}

const FeaturesVehicleDetails = ({ camper }) => {
	return (
		<div className={styles.vehicleDetailsContainer}>
			<h3 className={styles.title}>Vehicle Details</h3>
			<ul className={styles.featureList}>
				<li className={styles.featureItem}>
					<p>Form</p>
					<p>{formatString(camper.form)}</p>
				</li>
				<li className={styles.featureItem}>
					<p>Model</p>
					<p>{camper.length}</p>
				</li>
				<li className={styles.featureItem}>
					<p>Width</p>
					<p>{camper.width}</p>
				</li>
				<li className={styles.featureItem}>
					<p>Height</p>
					<p>{camper.height}</p>
				</li>
				<li className={styles.featureItem}>
					<p>Tank</p>
					<p>{camper.tank}</p>
				</li>
				<li className={styles.featureItem}>
					<p>Consumption</p>
					<p>{camper.consumption}</p>
				</li>
			</ul>
		</div>
	)
}

export default FeaturesVehicleDetails
