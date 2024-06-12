import { useSelector } from 'react-redux'
import CamperCard from '../../components/CamperCard/CamperCard'

import styles from './FavoritesPage.module.css'

const FavoritesPage = () => {
	const favorites = useSelector(state => state.campers.favorites)

	return (
		<div className={styles.container}>
			<div className='campers-list'>
				{favorites.map(camper => (
					<CamperCard key={camper._id} camper={camper} />
				))}
			</div>
		</div>
	)
}

export default FavoritesPage
