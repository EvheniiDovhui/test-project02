/* eslint-disable react/prop-types */
import { useState } from 'react'
import { IconVan, IconFullyIntegrated, IconAlcove } from '../../img/icon/icon'
import styles from './VehicleType.module.css'

const VehicleType = ({ onVehicleTypeChange, searchButtonClicked }) => {
	const [selectedVehicleType, setSelectedVehicleType] = useState(null)

	const handleVehicleTypeChange = vehicleType => {
		if (selectedVehicleType === vehicleType) {
			setSelectedVehicleType(null)
			onVehicleTypeChange(null)
		} else {
			setSelectedVehicleType(vehicleType)
			onVehicleTypeChange(vehicleType)
		}
	}

	const handleSearchButtonClick = () => {
		onVehicleTypeChange(selectedVehicleType)
	}

	const iconMap = {
		panelTruck: <IconVan className={styles.icon} />,
		fullyIntegrated: <IconFullyIntegrated className={styles.icon} />,
		alcove: <IconAlcove className={styles.icon} />,
	}

	return (
		<div className={styles.vehicleType}>
			<h3 className={styles.title}>Vehicle Type</h3>
			<div className={styles.vehicleOption}>
				<label
					className={`${styles.vehicleItem} ${
						selectedVehicleType === 'panelTruck' ? styles.selected : ''
					}`}
				>
					<input
						type='radio'
						value='panelTruck'
						checked={selectedVehicleType === 'panelTruck'}
						onChange={() => handleVehicleTypeChange('panelTruck')}
					/>
					{iconMap['panelTruck']}
					<span className={styles.label}>Van</span>
				</label>
				<label
					className={`${styles.vehicleItem} ${
						selectedVehicleType === 'fullyIntegrated' ? styles.selected : ''
					}`}
				>
					<input
						type='radio'
						value='fullyIntegrated'
						checked={selectedVehicleType === 'fullyIntegrated'}
						onChange={() => handleVehicleTypeChange('fullyIntegrated')}
					/>
					{iconMap['fullyIntegrated']}
					<span className={styles.label}>Fully Integrated</span>
				</label>
				<label
					className={`${styles.vehicleItem} ${
						selectedVehicleType === 'alcove' ? styles.selected : ''
					}`}
				>
					<input
						type='radio'
						value='alcove'
						checked={selectedVehicleType === 'alcove'}
						onChange={() => handleVehicleTypeChange('alcove')}
					/>
					{iconMap['alcove']}
					<span className={styles.label}>Alcove</span>
				</label>
			</div>
			{searchButtonClicked && (
				<button
					className={styles.searchButton}
					onClick={handleSearchButtonClick}
				>
					Apply
				</button>
			)}
		</div>
	)
}

export default VehicleType
