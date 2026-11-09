import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gray-100 relative bg-white" style={{ zIndex: 1 }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="Team Cross Fit" width={200} height={60} className="h-14 w-auto" />
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Connected employee wellness for HR and people teams.
            </p>
          </div>

            <div className="flex flex-wrap gap-12">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Product</p>
              <div className="space-y-2">
                <Link href="/product" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Product Overview</Link>
                <Link href="/integrations" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Integrations</Link>
                <Link href="/challenges" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Challenges</Link>
                <Link href="/how-it-works" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">How It Works</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">For Teams</p>
              <div className="space-y-2">
                <Link href="/for-employers" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">For HR Teams</Link>
                <Link href="/signup" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Get Started</Link>
                <Link href="/about" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">About</Link>
                <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Legal</p>
              <div className="space-y-2">
                <Link href="/privacy" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Terms of Service</Link>
                <Link href="/sms" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">SMS Program</Link>
                <Link href="/contact" className="block text-sm text-gray-500 hover:text-gray-900 transition-colors">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-sm text-gray-400 space-y-1">
              <p>&copy; 2026 Team Cross Fit. All rights reserved.</p>
              <p>#3085 1401 Pennsylvania Ave Suite 105, Wilmington, DE 19806</p>
              <p>
                <a href="tel:+13025205454" className="hover:text-gray-900 transition-colors">(302) 520-5454</a>
                {' · '}
                <a href="mailto:hello@teamcrossfit.com" className="hover:text-gray-900 transition-colors">hello@teamcrossfit.com</a>
              </p>
            </div>
            <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/company/team-cross-fit/?viewAsMember=true" target="_blank" rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Team Cross Fit on LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6 max-w-3xl">
          Team Cross Fit is a wellness software platform. It is not a medical device and does not provide medical advice. Team Cross Fit is not affiliated with or endorsed by CrossFit, LLC.
        </p>
      </div>
    </footer>
  );
}
