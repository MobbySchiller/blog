import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { setData } from '../store/fetchedDataSlice'
import Loader from '../pages/Loader'
import Error from '../pages/Error'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Blog = () => {
    const dispatch = useDispatch()

    let { loading, data, error } = useFetch('http://localhost:1337/api/blogs?populate=*')
    if (loading) return <Loader />
    if (error) return <Error />
    dispatch(setData(data))

    return (
        <div className='w-full min-h-screen relative bg-light-background dark:bg-dark-background text-light-primary dark:text-dark-primary font-main'>
            <div className='container max-w-6xl mx-auto pb-20'>
                <Header />
                <Main />
            </div>
            <Footer />
        </div >
    )
}

export default Blog