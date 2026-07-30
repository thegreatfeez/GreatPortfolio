import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { footerLinks, site } from '../data.ts'

type FooterLinkProps = {
  href: string
  label: string
  external?: boolean
  icon: 'github' | 'linkedin' | 'x' | 'tiktok' | 'instagram'
}

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  tiktok: FaTiktok,
  instagram: FaInstagram,
} as const

function FooterLink({ href, label, external, icon }: FooterLinkProps) {
  const Icon = iconMap[icon]
  if (external) {
    return (
      <a
        aria-label={label}
        className="transition-colors hover:text-[#bdc7dc]"
        href={href}
        rel="noreferrer"
        target="_blank"
      >
        <Icon className="text-base" />
      </a>
    )
  }

  return (
    <Link aria-label={label} className="transition-colors hover:text-[#bdc7dc]" to={href}>
      <Icon className="text-base" />
    </Link>
  )
}

function Footer() {
  return (
    <footer
      className="flex flex-col gap-6 border-t border-white/5 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-12"
      id="contact"
    >
      <div>
        <div className="mb-2 font-['Space_Grotesk'] text-base font-bold text-slate-200">
          {site.name}
        </div>
        <div className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
          © {new Date().getFullYear()} {site.copyrightSuffix}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-5 text-[11px] uppercase tracking-[0.2em] text-slate-500">
        {footerLinks.map((link) => (
          <FooterLink
            key={link.label}
            href={link.href}
            label={link.label}
            external={link.external}
            icon={link.icon}
          />
        ))}
      </div>
    </footer>
  )
}

export default Footer
