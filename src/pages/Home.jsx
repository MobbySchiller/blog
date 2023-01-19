import { useSelector } from 'react-redux'
import LeadPreview from '../components/LeadPreview'
import Preview from '../components/Preview'

const Home = () => {
    const articles = useSelector((state) => state.fetchedData.data)

    const lastFiveArticles = articles.slice(-5)
    console.log(lastFiveArticles)

    const lastArticle = lastFiveArticles.pop().attributes
    const previews = lastFiveArticles.map(article => (
        <Preview key={article.id} article={article.attributes} />
    ))

    return (
        <>
            <LeadPreview article={lastArticle} />
            <section>
                <h2 className='py-8 lg:py-12 xl:py-16 text-3xl lg:text-4xl text-center font-title'>Ostatnie artykuły</h2>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:max-w-7xl mx-auto mb-30'>
                    {previews}
                </div>
            </section>
        </>
    )
}

export default Home