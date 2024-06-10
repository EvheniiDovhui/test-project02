import React from 'react'

const Modal = ({ camper, onClose }) => {
	return (
		<div className='modal-backdrop' onClick={onClose}>
			<div className='modal' onClick={e => e.stopPropagation()}>
				<button className='close-button' onClick={onClose}>
					X
				</button>
				<h2>{camper.name}</h2>
				<p>{camper.details}</p>
				<form>
					<input type='text' placeholder='Name' required />
					<input type='email' placeholder='Email' required />
					<input type='date' placeholder='Booking Date' required />
					<textarea placeholder='Comment'></textarea>
					<button type='submit'>Book</button>
				</form>
			</div>
		</div>
	)
}

export default Modal
