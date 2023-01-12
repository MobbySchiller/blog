import { useSelector, useDispatch } from 'react-redux'
import { change } from '../store/hamburgerSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Hamburger = () => {
    const isActive = useSelector((state) => state.hamburger.navIsActive)
    const dispatch = useDispatch()

    return (
        <div
            className='flex justify-center items-center absolute top-3 left-3 text-2xl text-light-primary-text sm:invisible'
            style={{
                width: '24px',
                height: '21px'
            }}
            onClick={() => dispatch(change())}>
            <FontAwesomeIcon icon={isActive ? faXmark : faBars} />
        </div>
    )
}

export default Hamburger