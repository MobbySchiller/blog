import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

const SocialsRef = () => {
    return (
        <div className='text-2xl text-light-ref-icons dark:text-dark-ref-icons'>
            <a href='https://kburzynski.com/' className='sm:mx-3'>
                <FontAwesomeIcon icon={faGlobe} />
            </a>
            <a href='https://www.linkedin.com/in/krzysztof-burzy%C5%84ski-86bb79190/' className='sm:mx-3'>
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
        </div>
    )
}

export default SocialsRef