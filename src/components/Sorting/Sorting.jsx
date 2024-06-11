/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from './Sorting.module.css'
import Location from '../Location/Location'
import VehicleEquipment from '../VehicleEquipment/VehicleEquipment'
import VehicleType from '../VehicleType/VehicleType'

const Sorting = ({ campers = [], onFilterChange = () => {} }) => {
	const [selectedLocation, setSelectedLocation] = useState(null)
	const [selectedEquipment, setSelectedEquipment] = useState([])
	const [selectedVehicleType, setSelectedVehicleType] = useState(null)

	const handleLocationChange = location => {
		setSelectedLocation(location)
	}

	const handleEquipmentChange = equipment => {
		setSelectedEquipment(equipment)
	}

	const handleVehicleTypeChange = vehicleType => {
		setSelectedVehicleType(vehicleType)
	}

	const handleFiltersChange = () => {
		const filteredCampers = campers.filter(camper => {
			const matchesLocation = selectedLocation
				? camper.location === selectedLocation
				: true
			const matchesVehicleType = selectedVehicleType
				? camper.form === selectedVehicleType
				: true
			const matchesEquipment = selectedEquipment.every(e => {
				const details = camper.details
				return details && details[e] === 1
			})
			return matchesLocation && matchesVehicleType && matchesEquipment
		})
		onFilterChange(filteredCampers)
	}

	return (
		<div className={styles.sorting}>
			<Location
				locations={[...new Set(campers.map(camper => camper.location))]}
				onLocationChange={handleLocationChange}
			/>
			<p className={styles.text}>Filters</p>
			<VehicleEquipment
				selectedEquipment={selectedEquipment}
				onEquipmentChange={handleEquipmentChange}
			/>
			<VehicleType onVehicleTypeChange={handleVehicleTypeChange} />
			<button
				type='button'
				className={styles.button}
				onClick={handleFiltersChange} // Виклик функції тільки при натисканні на кнопку
			>
				Search
			</button>
		</div>
	)
}

export default Sorting
