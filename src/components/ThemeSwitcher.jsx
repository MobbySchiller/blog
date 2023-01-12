import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitcher = () => {
    return (
        <div className='flex justify-around items-center w-20 h-8 mx-auto rounded-3xl bg-light-elements'>
            <FontAwesomeIcon icon={faSun} />
            <FontAwesomeIcon icon={faMoon} />
        </div>
    )
}

export default ThemeSwitcher