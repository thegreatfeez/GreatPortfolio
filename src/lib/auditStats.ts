import { auditsPage } from '../data.ts'

const bountyTotal = auditsPage.audits.reduce((total, audit) => {
  const amount = Number.parseFloat(audit.reward.replace(/[^0-9.]/g, ''))
  return Number.isNaN(amount) ? total : total + amount
}, 0)

export const formattedBountyTotal = `$${bountyTotal.toFixed(2)}`

export const auditStats = [
  { label: 'Submissions', value: String(auditsPage.audits.length) },
  {
    label: 'Platforms',
    value: String(new Set(auditsPage.audits.map((audit) => audit.category)).size),
  },
  { label: 'Bounties earned', value: formattedBountyTotal },
]
