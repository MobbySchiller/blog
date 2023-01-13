import { useSelector } from 'react-redux'

const Logo = () => {
    const isDark = useSelector((state) => state.theme.isDark)

    return (
        <h1
            className="h-14 sm:h-20 lg:h-24 text-5xl sm:text-6xl lg:text-7xl text-center font-title sm:my-12"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #75B845 31%, #F2BE2D 31%, #F2BE2D 41%, #E09434 41%, #E09434 51%, #C55152 51%, #C55152 61%, #934E84 61%, #934E84 71%, #009EDD 71%)',
                color: 'transparent',
                WebkitBackgroundClip: 'text',
                WebkitTextStroke: `1px ${isDark ? '' : '#313134'}`
            }}
        > O JavaScript
        </h1 >
    )
}

export default Logo