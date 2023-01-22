import { NavLink } from 'react-router-dom'
import { parseDate } from '../scripts/parser'

const LeadPreview = ({ article, id }) => {
    const { title, description, cover, category, createdAt } = article

    const imageAttributes = cover.data[0].attributes

    const image = {
        url: imageAttributes.url,
        alt: imageAttributes.name
    }

    const date = parseDate(createdAt)

    return (
        <NavLink to={`/article/${id}`}>
            <article className="md:flex md:items-start max-w-full md:max-w-7xl mx-auto p-4 xl:px-2">
                <img
                    src={`http://localhost:1337${image.url}`}
                    alt={image.alt}
                    className="rounded-lg md:w-3/5 md:aspect-auto sm:mr-4"
                />
                <div>
                    <p className='py-1 sm:py-0 text-light-secondary dark:text-dark-secondary lg:text-lg xl:text-xl'>
                        <span className="font-bold">{category}</span>
                        <span> • </span>
                        <span>{date}</span>
                    </p>
                    <h3 className="py-2 lg:py-6 xl:py-10 text-3xl lg:text-4xl xl:text-5xl font-title">{title}</h3>
                    <p className="text-light-secondary dark:text-dark-secondary md:text-lg lg:text-xl ">{description}</p>
                    <div className="flex pt-4 lg:pt-6 xl:pt-10">
                        <img
                            src="../images/penguin.png"
                            alt=""
                            className="rounded-full mr-2"
                        />
                        <div className='lg:text-lg xl:text-xl'>
                            <p>Author</p>
                            <p className="font-bold">John Doe</p>
                        </div>
                    </div>
                </div>
            </article>
        </NavLink >
    )
}

export default LeadPreview