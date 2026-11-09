import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SMS Program — Team Cross Fit',
  description: 'Transactional account alerts from the Team Cross Fit wellness platform — program details, opt-in, and sample messages.',
};

const atAGlance: { label: string; value: string }[] = [
  { label: 'Program name', value: 'Team Cross Fit Account Alerts' },
  { label: 'Sender', value: 'Team Crossfit LLC' },
  { label: 'What it is', value: 'Automated, system-triggered alerts; no marketing' },
  { label: 'Who receives', value: 'Employees who opt in at signup' },
  { label: 'How to opt in', value: 'Optional, unchecked checkbox on /signup step 2' },
  { label: 'Frequency', value: 'Varies by account activity' },
  { label: 'Cost', value: 'Msg & data rates may apply' },
  { label: 'Opt out', value: 'Reply STOP' },
  { label: 'Resubscribe', value: 'Reply START' },
  { label: 'Help', value: 'Reply HELP or email hello@teamcrossfit.com' },
  { label: 'Consent', value: 'Not a condition of purchase' },
  { label: 'Data sharing', value: 'Mobile info and opt-in consent never shared/sold to third parties for marketing' },
];

const triggers: { event: string; message: string }[] = [
  { event: 'Account created', message: 'Welcome / confirmation' },
  { event: 'New sign-in', message: 'Security notice' },
  { event: 'Challenge milestone or completion', message: 'Milestone alert' },
  { event: 'Streak reached / at risk', message: 'Streak notification' },
  { event: 'Points earned or redeemed', message: 'Rewards alert' },
];

export default function SmsProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] blob opacity-20"
          style={{ background: 'radial-gradient(circle, rgba(134,239,172,0.4) 0%, transparent 70%)' }} />
      </div>

      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-green-700 mb-8"
            style={{ background: 'rgba(134,239,172,0.2)', border: '1px solid rgba(134,239,172,0.4)' }}>
            <span>💬</span>
            SMS Program
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">Team Cross Fit SMS Program</h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            Transactional account alerts from the Team Cross Fit wellness platform.
          </p>
        </div>
      </section>

      {/* At-a-glance */}
      <section className="py-4 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">At a glance</h2>
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {atAGlance.map(item => (
                <div key={item.label} className="border-b border-gray-100 pb-3">
                  <dt className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">{item.label}</dt>
                  <dd className="text-sm text-gray-700">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Trigger table */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What triggers a message</h2>
          <div className="glass-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left font-semibold text-gray-700 px-6 py-4">Event</th>
                  <th className="text-left font-semibold text-gray-700 px-6 py-4">Message</th>
                </tr>
              </thead>
              <tbody>
                {triggers.map(row => (
                  <tr key={row.event} className="border-b border-gray-50 last:border-0">
                    <td className="px-6 py-4 text-gray-600">{row.event}</td>
                    <td className="px-6 py-4 text-gray-600">{row.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sample messages */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample messages</h2>
          <div className="glass-card p-6">
            <ul className="text-sm text-gray-600 space-y-3">
              <li>&quot;Team Cross Fit: Welcome! Your account is active. Reply HELP for help, STOP to opt out. Msg &amp; data rates may apply.&quot;</li>
              <li>&quot;Team Cross Fit: You completed the 10K Step Challenge and earned 100 pts. Reply STOP to opt out.&quot;</li>
              <li>&quot;Team Cross Fit: New sign-in to your account. If this wasn&apos;t you, contact hello@teamcrossfit.com. Reply STOP to opt out.&quot;</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Links */}
      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center justify-between">
            <p className="text-sm text-gray-500">Full legal language and program details:</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/terms#sms" className="text-sm font-semibold text-green-600 hover:text-green-700">Terms §5 →</Link>
              <Link href="/privacy" className="text-sm font-semibold text-green-600 hover:text-green-700">Privacy Policy →</Link>
              <Link href="/contact" className="text-sm font-semibold text-green-600 hover:text-green-700">Contact →</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
