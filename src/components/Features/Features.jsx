import React from 'react'
import FeaturesDetails from '../FeaturesDetails/FeaturesDetails'
import FeaturesVehicleDetails from '../FeaturesVehicleDetails/FeaturesVehicleDetails'

const Features = ({ camper }) => {
	return (
		<div>
			<FeaturesDetails camper={camper} />
			<FeaturesVehicleDetails camper={camper} />
		</div>
	)
}

export default Features

// import React from 'react'
// import styles from './Features.module.css'

// const Features = ({ details }) => (
// 	<div className={styles.features}>
// 		<h3 className={styles.title}>Features</h3>
// 		<ul className={styles.featureList}>
// 			{details.map((detail, index) => (
// 				<li key={index} className={styles.featureItem}>
// 					{detail}
// 				</li>
// 			))}
// 		</ul>
// 	</div>
// )

// export default Features
