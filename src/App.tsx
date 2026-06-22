import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'gallery', element: <Gallery /> },
      {
        path: '*',
        element: (
          <div className="text-center text-slate-400">
            <h1 className="text-4xl font-bold text-slate-100">404</h1>
            <p className="mt-2">ページが見つかりませんでした。</p>
          </div>
        ),
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
