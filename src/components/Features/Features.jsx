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
