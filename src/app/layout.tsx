import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/contexts/theme-provider';
import { LanguageProvider } from '@/contexts/language-context';
import { Toaster } from '@/components/ui/toaster';
import { LangSetter } from '@/components/lang-setter';

export const metadata: Metadata = {
  title: 'Iván Rodríguez - FullStack Portfolio',
  description: 'Iván Rodríguez\'s portfolio. FullStack Developer based in Madrid, specializing in React, JavaScript, TypeScript, MongoDB, SQL, and NextJS.',
  keywords: ['FullStack Developer Madrid', 'React', 'JavaScript', 'TypeScript', 'MongoDB', 'SQL', 'NextJS', 'Portfolio'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <LangSetter />
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
