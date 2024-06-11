/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import { IconMapPin } from '../../img/icon/icon'
import styles from './Location.module.css'

export const Location = ({ locations = [], onLocationChange = () => {} }) => {
	const [inputValue, setInputValue] = useState('')
	const [filteredLocations, setFilteredLocations] = useState(locations)
	const [showSuggestions, setShowSuggestions] = useState(false)
	const containerRef = useRef(null)

	const handleInputChange = event => {
		setInputValue(event.target.value)
		const cleanedInput = event.target.value.trim().toLowerCase()
		setFilteredLocations(
			locations.filter(location =>
				location.toLowerCase().includes(cleanedInput)
			)
		)
		setShowSuggestions(true)
	}

	const handleSelectLocation = location => {
		setInputValue(location)
		onLocationChange(location)
		setShowSuggestions(false)
	}

	const handleClickOutside = event => {
		if (containerRef.current && !containerRef.current.contains(event.target)) {
			setShowSuggestions(false)
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	return (
		<div className={styles.location} ref={containerRef}>
			<h3 className={styles.title}>Location</h3>
			<div className={styles.inputWithIcon}>
				<IconMapPin className={styles.icon} />
				<input
					className={styles.input}
					type='text'
					placeholder='location'
					value={inputValue}
					onChange={handleInputChange}
				/>
				{showSuggestions && filteredLocations.length > 0 && (
					<ul className={styles.suggestions}>
						{filteredLocations.map(location => (
							<li key={location} onClick={() => handleSelectLocation(location)}>
								{location}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	)
}

export default Location
