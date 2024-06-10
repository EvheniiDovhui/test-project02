import { useDispatch, useSelector } from 'react-redux'
import { toggleFavorite } from '../../redux/campersSlice'

const CamperCard = ({ camper }) => {
	const dispatch = useDispatch()
	const favorites = useSelector(state => state.campers.favorites)
	const isFavorite = favorites.some(fav => fav.id === camper.id)
	console.log(favorites)
	console.log(isFavorite)

	const handleFavorite = () => {
		dispatch(toggleFavorite(camper))
	}

	return (
		<div className='camper-card'>
			<img src={camper.gallery[0]} alt={camper.name} width={200} />
			<h3>{camper.name}</h3>
			<p>{camper.description}</p>
			<button
				onClick={handleFavorite}
				style={{ color: isFavorite ? 'red' : 'black' }}
			>
				❤️
			</button>
			<button>Show more</button>
		</div>
	)
}

export default CamperCard
