import { NavLink } from 'react-router-dom'

const LeadPreview = () => {

    return (
        <NavLink to='/article/2'>
            <article className="md:flex md:items-start max-w-full md:max-w-7xl mx-auto p-4 xl:px-2">
                <img
                    src="../images/code.jpg"
                    alt=""
                    className="rounded-lg md:w-3/5 md:aspect-auto sm:mr-4"
                />
                <div>
                    <p className='py-1 sm:py-0 text-light-secondary dark:text-dark-secondary lg:text-lg xl:text-xl'>
                        <span className="font-bold">Category</span>
                        <span> • </span>
                        <span>January 13, 2023</span>
                    </p>
                    <h3 className="py-2 lg:py-6 xl:py-10 text-3xl lg:text-4xl xl:text-5xl font-title">Title</h3>
                    <p className="text-light-secondary dark:text-dark-secondary md:text-lg lg:text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ipsa temporibus fugiat quam. Delectus modi voluptatum fugit adipisci aliquid rerum, magni debitis cum.</p>
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