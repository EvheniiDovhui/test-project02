/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/campersSlice'
import { selectFavorites } from '../../redux/selectors'
import { CamperCardHeader } from '../CamperCardHeaher/CamperCardHeader'
import { CamperCardDetails } from '../CamperCardDetails/CamperCardDetails'

import styles from './CamperCard.module.css'
import { IconHeart, IconHeartFilled } from '../../img/icon/icon'

const CamperCard = ({ camper }) => {
	const dispatch = useDispatch()
	const favorites = useSelector(selectFavorites)

	const isFavorite = favorites.some(fav => fav._id === camper._id)

	const handleFavorite = () => {
		dispatch(toggleFavorite(camper))
	}

	return (
		<div className={styles.camperCard}>
			<img className={styles.image} src={camper.gallery[0]} alt={camper.name} />
			<div className={styles.card}>
				<CamperCardHeader camper={camper} />
				<CamperCardDetails camper={camper} />
				<div className={styles.buttonContainer}>
					<button className={styles.button} onClick={handleFavorite}>
						{isFavorite ? (
							<IconHeartFilled className={styles.IconHeart} />
						) : (
							<IconHeart className={styles.IconHeart1} />
						)}
					</button>
					<button className={styles.buttonShowMore}>Show more</button>
				</div>
			</div>
		</div>
	)
}

export default CamperCard
