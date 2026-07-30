import { NavLink } from 'react-router-dom'
import { navLinks, site } from '../data.ts'

function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#0c0e17]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-[#e1e4ff] md:text-base">
          <img
            className="h-9 w-9 rounded-full border border-[#404664]/30 object-cover"
            src={site.profileImage}
            alt={site.name}
          />
          <span className="font-['Space_Grotesk']">{site.name}</span>
        </div>
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                isActive
                  ? 'border-b border-[#bdc7dc]/30 pb-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#bdc7dc]'
                  : 'text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition-colors hover:text-slate-300'
              }
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
