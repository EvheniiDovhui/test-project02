import React from 'react'
import { useFormik } from 'formik'
import styles from './Form.module.css'

const Form = () => {
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			bookingDate: '',
			comment: '',
		},
		onSubmit: values => {
			console.log(values)
		},
	})

	return (
		<div className={styles.wrapper}>
			<h3 className={styles.title}>Book your campervan now</h3>
			<p className={styles.text}>
				Stay connected! We are always ready to help you.
			</p>
			<form onSubmit={formik.handleSubmit} className={styles.form}>
				<input
					type='text'
					name='name'
					onChange={formik.handleChange}
					value={formik.values.name}
					className={styles.input}
					placeholder='Name'
				/>
				<input
					type='email'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					className={styles.input}
					placeholder='Email'
				/>
				<input
					type='date'
					name='bookingDate'
					onChange={formik.handleChange}
					value={formik.values.bookingDate}
					className={styles.input}
					placeholder='Booking Date'
				/>
				<textarea
					name='comment'
					onChange={formik.handleChange}
					value={formik.values.comment}
					className={styles.inputComent}
					placeholder='Comment'
				></textarea>
				<button className={styles.submitButton} type='submit'>
					Send
				</button>
			</form>
		</div>
	)
}

export default Form
