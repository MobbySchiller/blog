import { useSelector, useDispatch } from 'react-redux'
import { setCategory } from '../store/selectorsSlice'

const CategorySelector = () => {
    const articles = useSelector((state) => state.fetchedData.data)
    const dispatch = useDispatch()

    const getCategories = () => {
        const categories = articles.map(article => article.attributes.category)
        const singleCategories = new Set(categories)
        const result = Array.from(singleCategories)
        return result
    }

    const categories = getCategories()

    const selectorOptions = categories.map(category => {
        return (
            <option key={category} value={category}>{category}</option>
        )
    })

    const handleSelector = (event) => {
        const value = event.target.value
        dispatch(setCategory({ value }))
    }

    return (
        <div className="w-full md:w-1/5 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-light-primary dark:text-dark-primary mb-1">
                Kategoria
            </label>
            <div className="relative">
                <select
                    className="block appearance-none w-full bg-light-elements dark:bg-dark-elements border border-light-gray dark:border-dark-secondary text-light-primary dark:text-dark-primary py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-theme-icon dark:focus:border-theme-icon"
                    onChange={handleSelector}
                >
                    <option value="all">Wszystkie</option>
                    {selectorOptions}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-light-primary dark:text-dark-primary">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default CategorySelector