import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Legaci - Portfolio Management Platform',
  description: 'AI-powered portfolio management and operations platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
