import { FiArrowUp, FiMail } from 'react-icons/fi'
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaXTwitter,
} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import type { FooterLink as FooterLinkType } from '../data.ts'
import { contact, footerLinks, site } from '../data.ts'
import { Reveal } from './Reveal'

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin,
  x: FaXTwitter,
  tiktok: FaTiktok,
  instagram: FaInstagram,
} as const

function FooterLink({ href, label, external, icon }: FooterLinkType) {
  const Icon = iconMap[icon]
  const className =
    'inline-flex h-11 w-11 items-center justify-center rounded-md border border-ink-subtle/25 text-ink-subtle transition-colors hover:border-mint/50 hover:text-mint'

  if (external) {
    return (
      <a aria-label={label} className={className} href={href} rel="noreferrer" target="_blank">
        <Icon aria-hidden="true" className="text-base" />
      </a>
    )
  }

  return (
    <Link aria-label={label} className={className} to={href}>
      <Icon aria-hidden="true" className="text-base" />
    </Link>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <Reveal className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-line" />
          <span className="font-mono text-[0.6875rem] uppercase tracking-[0.3em] text-mint">
            {contact.eyebrow}
          </span>
        </div>

        <h2 className="mt-5 mb-5 max-w-3xl font-display text-2xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          {contact.title}
        </h2>
        <p className="mb-9 max-w-2xl text-base leading-relaxed text-ink-muted">
          {contact.description}
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            className="inline-flex min-h-12 items-center gap-2 rounded-md bg-accent px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-abyss transition-colors hover:bg-ink"
            href={`mailto:${contact.email}`}
          >
            <FiMail aria-hidden="true" className="text-sm" />
            {contact.email}
          </a>
          <Link
            className="inline-flex min-h-12 items-center rounded-md border border-ink-subtle/30 px-7 font-display text-[0.6875rem] font-bold uppercase tracking-[0.25em] text-ink-muted transition-colors hover:border-mint/50 hover:text-mint"
            to="/projects"
          >
            Browse projects
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          {footerLinks.map((link) => (
            <FooterLink
              external={link.external}
              href={link.href}
              icon={link.icon}
              key={link.label}
              label={link.label}
            />
          ))}
        </div>
      </Reveal>

      <div className="border-t border-line/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-12">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle">
            © {new Date().getFullYear()} {site.copyrightSuffix}
          </p>
          <a
            className="inline-flex min-h-10 w-fit items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.2em] text-ink-subtle transition-colors hover:text-mint"
            href="#top"
          >
            Back to top
            <FiArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
