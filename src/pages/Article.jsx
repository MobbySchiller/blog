import { parseDate } from '../scripts/parser'

const Article = ({ data }) => {
    const { title, category, content, createdAt, cover } = data

    const imageAttributes = cover.data[0].attributes

    const image = {
        url: imageAttributes.url,
        alt: imageAttributes.name
    }

    const date = parseDate(createdAt)

    return (
        <article className="max-w-3xl mx-auto p-4">
            <button
                class="bg-theme-icon text-white font-bold mb-4 py-2 px-4 rounded"
                onClick={() => window.history.back()}
            >
                Back
            </button>
            <img
                src={`http://localhost:1337${image.url}`}
                alt={image.alt}
                className="w-full rounded-lg"
            />
            <p className='py-1 text-light-secondary dark:text-dark-secondary'>
                <span className="font-bold">{category}</span>
                <span> • </span>
                <span>{date}</span>
            </p>
            <h2 className="py-2 text-4xl lg:text-5xl font-title">{title}</h2>
            <p className="pb-4 text-light-secondary dark:text-dark-secondary md:text-xl">{content}</p>
        </article>
    )
}

export default Article