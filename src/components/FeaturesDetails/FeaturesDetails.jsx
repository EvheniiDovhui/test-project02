import {
	IconAC,
	IconAirConditioner,
	IconAutomatic,
	IconBeds,
	IconCD,
	IconFreezer,
	IconHob,
	IconKitchen,
	IconMdiGas,
	IconMicrowave,
	IconPetrol,
	IconRadio,
	IconShower,
	IconToilet,
	IconUser,
	IconWater,
} from '../../img/icon/icon'
import styles from './FeaturesDetails.module.css'

const FeaturesDetails = ({ camper }) => {
	return (
		<div className={styles.container}>
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
				{(camper.details.airConditioner && (
					<span className={styles.feature}>
						<IconAirConditioner className={styles.IconDetails} />
						{camper.details.airConditioner} air conditioner
					</span>
				)) ||
					null}
				{(camper.details.CD && (
					<span className={styles.feature}>
						<IconCD className={styles.IconDetails} /> CD
					</span>
				)) ||
					null}
				{(camper.details.radio && (
					<span className={styles.feature}>
						<IconRadio className={styles.IconDetails} />
						Radio
					</span>
				)) ||
					null}
				{(camper.details.hob && (
					<span className={styles.feature}>
						<IconHob className={styles.IconDetails} />
						{camper.details.hob} hob
					</span>
				)) ||
					null}
				{(camper.details.toilet && (
					<span className={styles.feature}>
						<IconToilet
							className={`${styles.IconDetails} ${styles.IconFill}`}
						/>
						{camper.details.toilet} toilet
					</span>
				)) ||
					null}
				{(camper.details.shower && (
					<span className={styles.feature}>
						<IconShower className={styles.IconDetails} />
						shower
					</span>
				)) ||
					null}
				{(camper.details.freezer && (
					<span className={styles.feature}>
						<IconFreezer className={styles.IconDetails} />
						freezer
					</span>
				)) ||
					null}
				{(camper.details.gas && (
					<span className={styles.feature}>
						<IconMdiGas
							className={`${styles.IconDetails} ${styles.IconFill}`}
						/>
						gas {camper.details.gas}
					</span>
				)) ||
					null}
				{(camper.details.water && (
					<span className={styles.feature}>
						<IconWater className={styles.IconDetails} />
						water
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

export default FeaturesDetails
