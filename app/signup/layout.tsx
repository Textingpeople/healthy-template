import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up — Team Cross Fit',
  description: "Join your company's Team Cross Fit wellness program using your Company ID.",
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
