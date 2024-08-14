import Home from '../pages/Home/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import ViewFeed from '../pages/ViewFeed'

export const SitemapRoutes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/feeds',
    element: <ViewFeed />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]
