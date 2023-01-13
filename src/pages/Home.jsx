import LeadPreview from '../components/LeadPreview'
import Preview from '../components/Preview'

const Home = () => {

    return (
        <>
            <LeadPreview />
            <section>
                <h2 className='py-8 lg:py-12 xl:py-16 text-3xl lg:text-4xl text-center font-title'>Ostatnie artykuły</h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:max-w-7xl mx-auto'>
                    <Preview />
                    <Preview />
                    <Preview />
                    <Preview />
                </div>
            </section>
        </>
    )
}

export default Home