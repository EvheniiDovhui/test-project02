import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampers } from '../../redux/campersSlice'
import { selectCampers, selectStatus, selectError } from '../../redux/selectors'
import styles from './CatalogPage.module.css'
import Loader from '../../components/Loader/Loader'
import Sorting from '../../components/Sorting/Sorting'
import CamperList from '../../components/CamrersList/CampeList'

const CatalogPage = () => {
	const dispatch = useDispatch()

	const campers = useSelector(selectCampers)
	const status = useSelector(selectStatus)
	const error = useSelector(selectError)

	const [filteredCampers, setFilteredCampers] = useState([])

	useEffect(() => {
		if (status === 'idle') {
			dispatch(fetchCampers())
		}
	}, [dispatch, status])

	useEffect(() => {
		setFilteredCampers(campers)
	}, [campers])

	if (status === 'loading') {
		return (
			<div className={styles.container}>
				<Loader />
			</div>
		)
	}

	if (status === 'failed') {
		return <div className={styles.container}>Error: {error}</div>
	}

	return (
		<div className={styles.containerWrapper}>
			<div className={styles.containerSorting}>
				<Sorting campers={campers} onFilterChange={setFilteredCampers} />
			</div>
			<div className={styles.container}>
				<CamperList campers={filteredCampers} />
			</div>
		</div>
	)
}

export default CatalogPage
