/* eslint-disable react/prop-types */

import {
	IconAC,
	IconAutomatic,
	IconBeds,
	IconKitchen,
	IconPetrol,
	IconUser,
} from '../../img/icon/icon'
import styles from './CamperCardDetails.module.css'

export const CamperCardDetails = ({ camper }) => {
	function truncateText(text, maxLength) {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + '...'
		} else {
			return text
		}
	}

	return (
		<div className={styles.container}>
			<div className={styles.details}></div>
			<p className={styles.description}>
				{truncateText(camper.description, 100)}
			</p>

			<div className={styles.details}>
				<span>
					<IconUser className={styles.IconDetails} />
					{camper.adults} adults
				</span>
				<span>
					{' '}
					<IconAutomatic className={styles.IconDetails} />
					{camper.transmission}
				</span>
				<span>
					<IconPetrol className={styles.IconDetails} /> {camper.engine}
				</span>
				<span>
					{' '}
					<IconKitchen className={styles.IconDetails} />{' '}
					{camper.details.kitchen ? 'Kitchen' : 'No Kitchen'}
				</span>
				<span>
					<IconBeds className={styles.IconDetails} /> {camper.details.beds} beds
				</span>
				<span>
					<IconAC className={styles.IconDetails} />{' '}
					{camper.details.airConditioner ? 'AC' : 'No AC'}
				</span>
			</div>
		</div>
	)
}
