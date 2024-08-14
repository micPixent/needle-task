import { Routes, Route } from 'react-router-dom'
import { SitemapRoutes } from './Sitemap'
import Home from '../pages/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {SitemapRoutes.map((route, index) => (
        <Route path={route.path} element={route.element} key={index}></Route>
      ))}
    </Routes>
  )
}

export default Router
