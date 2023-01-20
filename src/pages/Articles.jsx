import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setToDisplay } from '../store/toDisplaySlice'
import CategorySelector from '../components/CategorySelector'
import Preview from '../components/Preview'

const Articles = () => {
    const articles = useSelector((state) => state.fetchedData.data)
    const articlesToDisplay = useSelector((state) => state.toDisplay.toDisplay)
    const categorySelector = useSelector((state) => state.selectors.category)
    const dispatch = useDispatch()

    useEffect(() => {
        const filteredArticles = filterByCategories(articles, categorySelector)
        dispatch(setToDisplay(filteredArticles))
    }, [categorySelector])

    const filterByCategories = (articles, category) => {
        if (categorySelector !== 'all') {
            const sortedArticles = articles.filter(article => article.attributes.category === category)
            return sortedArticles
        }
        return articles
    }

    const previews = articlesToDisplay.map(article => (
        <Preview key={article.id} article={article.attributes} />
    ))

    return (
        <>
            <section className="flex flex-col sm:flex-row justify-between my-4">
                <CategorySelector />
            </section >
            <section className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mx-auto'>
                {previews}
            </section>
        </>
    )
}

export default Articles