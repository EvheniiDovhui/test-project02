/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/campersSlice'
import { selectFavorites } from '../../redux/selectors'

import { IconHeart, IconHeartFilled } from '../../img/icon/icon'
import styles from './CamperCardHeader.module.css'

export const CamperCardHeader = ({ camper }) => {
	const dispatch = useDispatch()
	const favorites = useSelector(selectFavorites)

	const isFavorite = favorites.some(fav => fav._id === camper._id)

	const handleFavorite = () => {
		dispatch(toggleFavorite(camper))
	}

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<h3 className={styles.name}>{camper.name}</h3>
				<div className={styles.containerPriceFavorite}>
					<div className={styles.price}>€{camper.price.toFixed(2)}</div>
					<button className={styles.button} onClick={handleFavorite}>
						{isFavorite ? (
							<IconHeartFilled className={styles.IconHeart} />
						) : (
							<IconHeart className={styles.IconHeart1} />
						)}
					</button>
				</div>
			</div>

			<div className={styles.meta}>
				<span className={styles.reviews}>
					⭐ {camper.rating} ({camper.reviews.length} Reviews)
				</span>
				<span className={styles.location}>{camper.location}</span>
			</div>
		</div>
	)
}
