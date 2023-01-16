import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setData } from '../store/fetchedDataSlice'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Blog = () => {
    const dispatch = useDispatch()

    let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*')
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>
    dispatch(setData(data))

    return (
        <div className='w-full min-h-screen relative bg-light-background dark:bg-dark-background text-light-primary dark:text-dark-primary font-main'>
            <div className='container mx-auto'>
                <Header />
                <Main />
            </div>
            <Footer />
        </div >
    )
}

export default Blog