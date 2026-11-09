import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Team Cross Fit',
  description: 'Team Cross Fit is a wellness software platform that connects employee activity to workplace challenges and rewards.',
};

export default function AboutPage() {
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
            <span>ℹ️</span>
            About
          </div>
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight mb-4">About Team Cross Fit</h1>
          <p className="text-lg text-gray-500 max-w-2xl">
            A wellness software platform employers offer to employees — not a medical device or healthcare provider.
          </p>
        </div>
      </section>

      {/* What we do */}
      <section className="py-4 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What we do</h2>
            <p className="text-gray-600 leading-relaxed">
              Team Cross Fit connects the health apps and devices employees already use — like Apple Health — with company wellness programs. Employees join challenges, track eligible activity automatically, and earn employer-set rewards. Employers see only aggregate engagement data, never an individual&apos;s health records.
            </p>
          </div>
        </div>
      </section>

      {/* IS / IS NOT */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)' }}>
              <p className="text-sm font-semibold text-green-800 mb-3">✅ Team Cross Fit IS</p>
              <ul className="text-sm text-green-700 space-y-2">
                <li>• A wellness software platform employers offer to employees</li>
                <li>• A way to connect Apple Health (or compatible devices) to workplace challenges</li>
                <li>• A system where employers see aggregate engagement only</li>
              </ul>
            </div>
            <div className="p-6 rounded-2xl" style={{ background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.2)' }}>
              <p className="text-sm font-semibold text-red-800 mb-3">❌ Team Cross Fit IS NOT</p>
              <ul className="text-sm text-red-700 space-y-2">
                <li>• A medical device or healthcare provider</li>
                <li>• A service that diagnoses, treats, or gives medical advice</li>
                <li>• Able to access clinical or medical records</li>
                <li>• Affiliated with or endorsed by CrossFit, LLC</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'HR sets up the program', desc: 'An HR or people team configures a company wellness program and generates a Company ID.' },
              { num: '02', title: 'Employee joins and connects', desc: 'Employees sign up with the Company ID and connect Apple Health or a compatible device.' },
              { num: '03', title: 'Activity syncs automatically', desc: 'Eligible activity syncs automatically. Challenges and rewards update without manual entry.' },
            ].map(step => (
              <div key={step.num} className="glass-card p-6">
                <div className="text-2xl font-black mb-2" style={{ color: 'rgba(22,163,74,0.2)' }}>{step.num}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Text alerts */}
      <section className="py-12 px-6 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Text alerts</h2>
            <p className="text-gray-600 leading-relaxed">
              SMS is optional and opt-in. Employees who choose to receive texts get transactional account alerts only — things like account confirmations, security notices, challenge milestones, streak reminders, and reward activity. We never send marketing texts. See our{' '}
              <Link href="/sms" className="text-green-600 hover:underline">SMS Program</Link> page for full details.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12 px-6 pb-20 relative" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Contact</h2>
            <p className="text-gray-600 mb-2"><strong>Email:</strong> <a href="mailto:hello@teamcrossfit.com" className="text-green-600 hover:underline">hello@teamcrossfit.com</a></p>
            <p className="text-gray-600 mb-2"><strong>Phone:</strong> (302) 520-5454</p>
            <p className="text-gray-600"><strong>Address:</strong> #3085 1401 Pennsylvania Ave Suite 105, Wilmington, DE 19806</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
