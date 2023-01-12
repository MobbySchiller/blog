import Hamburger from './Hamburger'
import Logo from './Logo'
import Nav from './Nav'
import ThemeSwitcher from './ThemeSwitcher'


const Header = () => {
    return (
        <header className='flex flex-col justify-center items-center relative h-16 sm:h-fit'>
            <Hamburger />
            <Logo />
            <Nav />
            <div className='absolute top-2 right-2 hidden sm:block'>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header