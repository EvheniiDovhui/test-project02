/* eslint-disable react/prop-types */

import CamperCard from '../CamperCard/CamperCard'
import styles from './CamperList.module.css'

import { useState } from 'react'

const CamperList = ({ campers }) => {
	const [visibleCampers, setVisibleCampers] = useState(4)

	const loadMore = () => {
		setVisibleCampers(prev => prev + 4)
	}

	return (
		<div className={styles.container}>
			<div className={styles.campersList}>
				{Array.isArray(campers) &&
					campers
						.slice(0, visibleCampers)
						.map(camper => <CamperCard key={camper._id} camper={camper} />)}
			</div>
			{visibleCampers < campers.length && (
				<button className={styles.loadMoreButton} onClick={loadMore}>
					Load more
				</button>
			)}
		</div>
	)
}

export default CamperList
