import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Team Cross Fit',
  description: 'Get in touch with the Team Cross Fit team — email, phone, or send us a message.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
