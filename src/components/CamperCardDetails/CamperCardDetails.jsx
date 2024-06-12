/* eslint-disable react/prop-types */

import {
	IconAC,
	IconAutomatic,
	IconBeds,
	IconCD,
	IconKitchen,
	IconMicrowave,
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
				{(camper.adults && (
					<span className={styles.feature}>
						<IconUser className={`${styles.IconDetails} ${styles.IconFill}`} />
						{camper.adults} adults
					</span>
				)) ||
					null}
				{(camper.transmission && (
					<span className={styles.feature}>
						<IconAutomatic className={styles.IconDetails} />
						{camper.transmission}
					</span>
				)) ||
					null}
				{(camper.details.airConditioner && (
					<span className={styles.feature}>
						<IconAC className={`${styles.IconDetails} ${styles.IconFill}`} />
						AC
					</span>
				)) ||
					null}
				<span className={styles.feature}>
					<IconPetrol className={`${styles.IconDetails} ${styles.IconFill}`} />
					{camper.engine}
				</span>
				{(camper.details.kitchen && (
					<span className={styles.feature}>
						<IconKitchen className={styles.IconDetails} />
						Kitchen
					</span>
				)) ||
					null}
				{(camper.details.beds && (
					<span className={styles.feature}>
						<IconBeds className={styles.IconDetails} /> {camper.details.beds}
						beds
					</span>
				)) ||
					null}

				{(camper.details.CD && (
					<span className={styles.feature}>
						<IconCD className={styles.IconDetails} /> CD
					</span>
				)) ||
					null}

				{(camper.details.microwave && (
					<span className={styles.feature}>
						<IconMicrowave className={styles.IconDetails} />
						microwave
					</span>
				)) ||
					null}
			</div>
		</div>
	)
}
