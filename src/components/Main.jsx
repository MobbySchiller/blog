import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Articles from '../pages/Articles'
import NotFound from '../pages/NotFound'
import Article from '../pages/Article'

const Main = () => {
    const articles = useSelector((state) => state.fetchedData.data)

    const articleRoutes = articles.map(article => (
        <Route path={`/article/${article.id}`} key={article.id} element={<Article data={article.attributes} />} />
    ))

    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/articles' element={<Articles />} />
                {articleRoutes}
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    )
}

export default Main