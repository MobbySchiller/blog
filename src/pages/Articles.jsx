import { useSelector } from 'react-redux'
import CategorySelector from '../components/CategorySelector'
import SortSelector from '../components/SortSelector'
import Preview from '../components/Preview'

const Articles = () => {
    const articles = useSelector((state) => state.fetchedData.data)

    const getCategories = () => {
        const categories = articles.map(article => article.attributes.category)
        const singleCategories = new Set(categories)
        const result = Array.from(singleCategories)
        return result
    }


    const categories = getCategories()

    const sortOptions = [
        { id: 0, name: 'Tytuł: od A do Z', value: 'aToZ' },
        { id: 1, name: 'Tytuł: od Z do A', value: 'zToA' },
        { id: 2, name: 'Data: od najnowszych', value: 'newToOld' },
        { id: 3, name: 'Data: od najstarszych', value: 'oldToNew' },
    ]

    const previews = articles.map(article => (
        <Preview key={article.id} article={article.attributes} />
    ))

    return (
        <>
            <section className="flex flex-col sm:flex-row justify-between my-4">
                <CategorySelector options={categories} />
                <SortSelector options={sortOptions} />
            </section >
            <section className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2 mx-auto'>
                {previews}
            </section>
        </>
    )
}

export default Articles