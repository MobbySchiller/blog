import { NavLink } from 'react-router-dom'

const Preview = ({ article }) => {
    const { title, description, category, createdAt } = article

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
                        <span>January 13, 2023</span>
                    </p>
                    <h3 className="py-2 text-3xl lg:text-4xl font-title">{title}</h3>
                    <p className="pb-4 text-light-secondary dark:text-dark-secondary md:text-md">{description}</p>
                </div>
            </NavLink >
        </article >
    )
}

export default Preview