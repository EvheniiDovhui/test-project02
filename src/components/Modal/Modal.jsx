import React, { useState } from 'react'
import { Modal as MuiModal, Box } from '@mui/material'
import styles from './Modal.module.css'

import Features from '../Features/Features'
import Form from '../Form/Form'
import Reviews from '../Reviews/Reviews'
import ModalHeader from '../ModalHeader/ModalHeader'

const Modal = ({ open, onClose, camper }) => {
	const [showFeatures, setShowFeatures] = useState(true)

	const handleToggleFeatures = () => {
		setShowFeatures(true)
	}

	const handleToggleReviews = () => {
		setShowFeatures(false)
	}

	return (
		<MuiModal open={open} onClose={onClose}>
			<Box className={styles.modalContent}>
				<button className={styles.closeButton} onClick={onClose}>
					&times;
				</button>
				<ModalHeader camper={camper} />
				<div>
					<button
						className={styles.toggleButton}
						onClick={handleToggleFeatures}
					>
						Features
					</button>
					<button className={styles.toggleButton} onClick={handleToggleReviews}>
						Reviews
					</button>
				</div>
				<div className={styles.tabs}>
					{showFeatures ? (
						<Features camper={camper} />
					) : (
						<Reviews reviews={camper.reviews} />
					)}
					<Form />
				</div>
			</Box>
		</MuiModal>
	)
}

export default Modal
