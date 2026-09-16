import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'
import { contact, navLinks, site } from '../data.ts'

const linkBase =
  'inline-flex min-h-10 items-center px-1 font-mono text-[0.6875rem] uppercase tracking-[0.25em] transition-colors'

function Navbar() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-line/20 bg-abyss/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3 md:px-12">
        <NavLink
          className="group flex items-center gap-3 py-1"
          onClick={() => setOpen(false)}
          to="/"
          aria-label={`${site.name} — home`}
        >
          <img
            alt=""
            className="h-9 w-9 rounded-full border border-line/40 object-cover"
            height={36}
            src={site.profileImage}
            width={36}
          />
          <span className="font-display text-sm font-bold uppercase tracking-[0.25em] text-ink">
            {site.name}
          </span>
        </NavLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              className={({ isActive }) =>
                `${linkBase} border-b ${
                  isActive
                    ? 'border-mint/60 text-ink'
                    : 'border-transparent text-ink-subtle hover:text-ink'
                }`
              }
              end={item.href === '/'}
              key={item.label}
              to={item.href}
            >
              {item.label}
            </NavLink>
          ))}
          <a
            className="inline-flex min-h-10 items-center rounded-md border border-ink-subtle/30 px-4 font-mono text-[0.6875rem] uppercase tracking-[0.25em] text-accent transition-colors hover:border-mint/50 hover:text-mint"
            href={`mailto:${contact.email}`}
          >
            Contact
          </a>
        </div>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
          className="-mr-2 inline-flex h-10 w-10 items-center justify-center rounded-md text-ink-muted transition-colors hover:text-ink md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {open ? (
        <div
          className="border-t border-line/20 bg-abyss/95 px-6 py-2 md:hidden"
          id="mobile-navigation"
        >
          <ul className="flex flex-col">
            {navLinks.map((item) => (
              <li key={item.label}>
                <NavLink
                  className={({ isActive }) =>
                    `flex min-h-12 items-center border-b border-line/10 font-display text-base font-medium ${
                      isActive ? 'text-mint' : 'text-ink-muted'
                    }`
                  }
                  end={item.href === '/'}
                  onClick={() => setOpen(false)}
                  to={item.href}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                className="flex min-h-12 items-center font-display text-base font-medium text-accent"
                href={`mailto:${contact.email}`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </nav>
  )
}

export default Navbar
