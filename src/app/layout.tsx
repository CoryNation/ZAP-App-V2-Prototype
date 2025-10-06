import type { Metadata } from 'next';
import ThemeRegistry from './(app)/shell/ThemeRegistry';
import AppShell from './(app)/shell/AppShell';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'ZAP App',
  description: 'Operational Intelligence Platform'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppShell>{children}</AppShell>
        </ThemeRegistry>
      </body>
    </html>
  );
}
