import { parseDate } from '../scripts/parser'

const Article = ({ data }) => {
    const { title, category, content, createdAt, author, cover, avatar } = data

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
        <article className="max-w-3xl mx-auto p-4">
            <button
                class="bg-theme-icon text-dark-primary font-bold mb-4 py-2 px-4 rounded"
                onClick={() => window.history.back()}
            >
                Back
            </button>
            <img
                src={`http://localhost:1337${coverImg.url}`}
                alt={coverImg.alt}
                className="w-full rounded-lg"
            />
            <p className='py-1 text-light-secondary dark:text-dark-secondary'>
                <span className="font-bold">{category}</span>
                <span> • </span>
                <span>{date}</span>
            </p>
            <h2 className="py-4 text-4xl lg:text-5xl font-title">{title}</h2>
            <p className="pb-4 text-light-secondary dark:text-dark-secondary md:text-xl text-justify">{content}</p>
            <div className="flex pt-2">
                <img
                    src={`http://localhost:1337${authorImg.url}`}
                    alt=""
                    width={50}
                    height={50}
                    className="rounded-full" />
                <div className='lg:text-lg xl:text-xl ml-2'>
                    <p>Autor</p>
                    <p className="font-bold">{author}</p>
                </div>
            </div>
        </article>
    )
}

export default Article