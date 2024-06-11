import { Link } from 'react-router-dom'

import styles from './HomePage.module.css' // Імпортуйте стилі з вашого модуля

const HomePage = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to the Camper Rental Service</h1>
			<p className={styles.description}>
				We provide the best campers for your adventures in Ukraine!
			</p>
			<div className={styles.buttonContainer}>
				<button type='button'>
					<Link to='/catalog' className={styles.link}>
						Catalog
					</Link>
				</button>
			</div>
		</div>
	)
}

export default HomePage
