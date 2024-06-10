// CatalogPage.jsx

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCampers } from '../../redux/campersSlice'
import CamperCard from '../../components/CamperCard/CamperCard'

const CatalogPage = () => {
	const dispatch = useDispatch()
	const campers = useSelector(state => state.campers.campers)
	const status = useSelector(state => state.campers.status)
	const error = useSelector(state => state.campers.error)
	console.log(campers)
	console.log(status)
	console.log(error)

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCampers())
		}
	}, [status, dispatch])

	if (status === 'loading') {
		return <div>Loading...</div>
	}

	if (status === 'failed') {
		return <div>{error}</div>
	}

	return (
		<div>
			<h1>Catalog</h1>
			<div className='camper-list'>
				{campers.map(camper => (
					<CamperCard key={camper._id} camper={camper} />
				))}
			</div>
			<button onClick={() => dispatch(fetchCampers())}>Load more</button>
		</div>
	)
}

export default CatalogPage
