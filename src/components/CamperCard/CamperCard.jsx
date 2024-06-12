/* eslint-disable react/prop-types */
import React, { useState } from 'react'

import { CamperCardHeader } from '../CamperCardHeaher/CamperCardHeader'
import { CamperCardDetails } from '../CamperCardDetails/CamperCardDetails'

import styles from './CamperCard.module.css'

import Modal from '../Modal/Modal'

const CamperCard = ({ camper }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => setOpen(true)
	const handleClose = () => setOpen(false)

	return (
		<div className={styles.camperCard}>
			<img className={styles.image} src={camper.gallery[0]} alt={camper.name} />
			<div className={styles.card}>
				<CamperCardHeader camper={camper} />
				<CamperCardDetails camper={camper} />
				<div className={styles.buttonContainer}>
					<button onClick={handleOpen} className={styles.buttonShowMore}>
						Show more
					</button>
					<Modal open={open} onClose={handleClose} camper={camper}></Modal>
				</div>
			</div>
		</div>
	)
}

export default CamperCard
