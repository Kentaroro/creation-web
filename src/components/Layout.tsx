import { Link, NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
]

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link to="/" className="text-lg font-bold tracking-tight">
            my-app
          </Link>
          <ul className="flex gap-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-1.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">
        <Outlet />
      </main>

      <footer className="border-t border-slate-800 px-6 py-6 text-center text-sm text-slate-500">
        Vite + React + Tailwind + React Router + GSAP + Fancybox
      </footer>
    </div>
  )
}

export default Layout
