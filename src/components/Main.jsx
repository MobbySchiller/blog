import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import NotFound from '../pages/NotFound'

const Main = () => {

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Main