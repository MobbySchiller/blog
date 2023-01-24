import { NavLink } from 'react-router-dom'
import { parseDate } from '../scripts/parser'
import { API } from './Blog'

const Preview = ({ article, id }) => {
    const { title, description, category, cover, createdAt } = article

    const imageAttributes = cover.data[0].attributes

    const image = {
        url: imageAttributes.formats.small.url,
        alt: imageAttributes.name
    }

    const date = parseDate(createdAt)

    return (
        <NavLink to={`/article/${id}`}>
            <article className="md:max-w-[400px] p-4">
                <img
                    src={`${API}${image.url}`}
                    alt={image.alt}
                    className="rounded-lg"
                />
                <p className='py-1 text-light-secondary dark:text-dark-secondary'>
                    <span className="font-bold">{category}</span>
                    <span> • </span>
                    <span>{date}</span>
                </p>
                <h3 className="py-2 text-3xl lg:text-4xl font-title">{title}</h3>
                <p className="pb-4 text-light-secondary dark:text-dark-secondary md:text-md">{description}</p>
            </article>
        </NavLink >
    )
}

export default Preview