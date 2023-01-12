import { NavLink } from "react-router-dom"
import { useSelector } from 'react-redux'
import ThemeSwitcher from "./ThemeSwitcher"
import SocialsRef from "./SocialsRef"

const Nav = () => {
    const isActive = useSelector((state) => state.hamburger.navIsActive)

    const pages = [
        { id: 1, name: 'Strona Główna', path: '/' },
        { id: 2, name: 'Artykuły', path: '/articles' }
    ]

    const links = pages.map(page => (
        <li
            key={page.id}
            className='py-3 text-lg sm:mx-3'
        >
            <NavLink to={page.path}>{page.name}</NavLink>
        </li>
    ))

    return (
        <nav
            className={`absolute sm:static sm:flex justify-between items-center bg-light-background w-full py-2 border-y border-light-gray`}
            style={{ top: `${isActive ? '64px' : '-200px'}` }}>
            <ul className='flex flex-col items-center sm:flex-row mb-4 sm:mb-0'>
                {links}
            </ul>
            <div className='sm:hidden'>
                <ThemeSwitcher />
            </div>
            <div className='hidden sm:block'>
                <SocialsRef />
            </div>
        </nav>
    )
}

export default Nav