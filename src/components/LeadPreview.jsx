import { NavLink } from 'react-router-dom'
import { parseDate } from '../scripts/parser'
import { API } from './Blog'

const LeadPreview = ({ article, id }) => {
    const { title, description, cover, category, author, createdAt, avatar } = article

    const coverImgAttributes = cover.data[0].attributes
    const authorImgAttributes = avatar.data[0].attributes

    const coverImg = {
        url: coverImgAttributes.url,
        alt: coverImgAttributes.name
    }

    const authorImg = {
        url: authorImgAttributes.url,
        alt: authorImgAttributes.name
    }

    const date = parseDate(createdAt)

    return (
        <NavLink to={`/article/${id}`}>
            <article className="md:flex md:items-start max-w-full md:max-w-7xl mx-auto p-4 xl:px-2">
                <img
                    src={`${API}${coverImg.url}`}
                    alt={coverImg.alt}
                    className="rounded-lg md:w-3/5 md:aspect-auto sm:mr-4"
                />
                <div>
                    <p className='py-1 sm:py-0 text-light-secondary dark:text-dark-secondary lg:text-lg xl:text-xl'>
                        <span className="font-bold">{category}</span>
                        <span> • </span>
                        <span>{date}</span>
                    </p>
                    <h3 className="py-2 lg:py-4 xl:py-6 text-3xl lg:text-4xl xl:text-5xl font-title">{title}</h3>
                    <p className="text-light-secondary dark:text-dark-secondary md:text-lg lg:text-xl ">{description}</p>
                    <div className="flex pt-4">
                        <img
                            src={`${API}${authorImg.url}`}
                            alt={authorImg.alt}
                            width={50}
                            height={50}
                            className="rounded-full mr-2"
                        />
                        <div className='lg:text-lg xl:text-xl'>
                            <p>Autor</p>
                            <p className="font-bold">{author}</p>
                        </div>
                    </div>
                </div>
            </article>
        </NavLink >
    )
}

export default LeadPreview