import { NavLink } from 'react-router-dom'

export const parseDate = (createdDate) => {
    const slicedDate = createdDate.slice(0, 10)
    const date = new Date(slicedDate)
    const options = { month: 'long', day: 'numeric', year: 'numeric' }
    const newDate = new Intl.DateTimeFormat('pl-PL', options).format(date)
    return newDate
}

const Preview = ({ article }) => {
    const { title, description, category, createdAt } = article

    const date = parseDate(createdAt)

    return (
        <article className='place-self-center'>
            <NavLink to='/article/1'>
                <div className="md:max-w-[400px] p-4">
                    <img
                        src="../images/code.jpg"
                        alt=""
                        className="rounded-lg"
                    />
                    <p className='py-1 text-light-secondary dark:text-dark-secondary'>
                        <span className="font-bold">{category}</span>
                        <span> • </span>
                        <span>{date}</span>
                    </p>
                    <h3 className="py-2 text-3xl lg:text-4xl font-title">{title}</h3>
                    <p className="pb-4 text-light-secondary dark:text-dark-secondary md:text-md">{description}</p>
                </div>
            </NavLink >
        </article >
    )
}

export default Preview