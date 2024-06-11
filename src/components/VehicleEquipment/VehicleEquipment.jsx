/* eslint-disable react/prop-types */

import styles from './VehicleEquipment.module.css'
import {
	IconAC,
	IconAutomatic,
	IconKitchen,
	IconShower,
	IconTV,
} from '../../img/icon/icon'

const VehicleEquipment = ({ selectedEquipment, onEquipmentChange }) => {
	const equipmentOptions = [
		{
			label: 'AC',
			icon: <IconAC className={styles.IconEquipment} />,
		},
		{
			label: 'automatic',
			icon: <IconAutomatic className={styles.IconEquipment} />,
		},
		{
			label: 'kitchen',
			icon: <IconKitchen className={styles.IconEquipment} />,
		},
		{
			label: 'shower',
			icon: <IconShower className={styles.IconEquipment} />,
		},
		{
			label: 'TV',
			icon: <IconTV className={styles.IconEquipment} />,
		},
	]

	const handleCheckboxChange = label => {
		const newSelectedEquipment = selectedEquipment.includes(label)
			? selectedEquipment.filter(item => item !== label)
			: [...selectedEquipment, label]
		onEquipmentChange(newSelectedEquipment)
	}

	return (
		<div className={styles.vehicleEquipment}>
			<h3 className={styles.title}>Vehicle Equipment</h3>
			<div className={styles.equipmentList}>
				{equipmentOptions.map(option => (
					<div
						key={option.label}
						className={`${styles.equipmentItem} ${
							selectedEquipment.includes(option.label) ? styles.selected : ''
						}`}
						onClick={() => handleCheckboxChange(option.label)}
					>
						{option.icon}
						<span className={styles.label}>{option.label}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default VehicleEquipment
