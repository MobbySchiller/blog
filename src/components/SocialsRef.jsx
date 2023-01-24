import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const SocialsRef = () => {
    return (
        <div className='text-2xl text-light-ref-icons dark:text-dark-ref-icons'>
            <a href='#' className='sm:mx-3'>
                <FontAwesomeIcon icon={faGlobe} />
            </a>
            <a href='#' className='sm:mx-3'>
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href='#' className='sm:mx-3'>
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href='#' className='sm:mx-3'>
                <FontAwesomeIcon icon={faYoutube} />
            </a>
        </div>
    )
}

export default SocialsRef