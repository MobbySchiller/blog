import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLight, setDark } from '../store/themeSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-solid-svg-icons'

const ThemeSwitcher = () => {
    const isDark = useSelector((state) => state.theme.isDark)
    const dispatch = useDispatch()

    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            dispatch(setDark())
        }
    }, [])

    useEffect(() => {
        const html = document.querySelector('html')
        if (isDark) {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }, [isDark])


    return (
        <div className='flex justify-around items-center w-20 h-8 mx-auto rounded-3xl bg-light-elements dark:bg-dark-elements text-dark-elements dark:text-light-secondary'>
            <FontAwesomeIcon
                icon={faSun}
                className={isDark ? '' : 'text-theme-icon'}
                onClick={() => dispatch(setLight())} />
            <FontAwesomeIcon
                icon={faMoon}
                className={isDark ? 'text-theme-icon' : ''}
                onClick={() => dispatch(setDark())} />
        </div>
    )
}

export default ThemeSwitcher