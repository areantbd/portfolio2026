'use client';
import { useLanguage } from '@/contexts/language-context';

export default function Footer() {
  const { content } = useLanguage();
  return (
    <footer className="bg-muted py-6 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-center md:flex-row md:px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {content.name}. All rights reserved.
        </p>
        <p className="text-xs">{content.footer.seo}</p>
      </div>
    </footer>
  );
}
