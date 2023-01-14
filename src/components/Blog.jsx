import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Blog = () => {
    return (
        <div className='w-full min-h-screen bg-light-background dark:bg-dark-background text-light-primary dark:text-dark-primary font-main'>
            <div className='container mx-auto'>
                <Header />
                <Main />
            </div>
            <Footer />
        </div >
    )
}

export default Blog