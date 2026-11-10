import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'THE CURIOUS LAB — Opeyemi Ogunbona',
  description: 'The portfolio of Opeyemi Ogunbona, AI Product Designer and vibebuilder.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Sidebar/><main id="top" className="main-shell">{children}</main></body></html>;
}
