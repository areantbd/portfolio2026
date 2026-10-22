"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Bot, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/language-context';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageSwitcher } from '@/components/language-switcher';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function Header() {
  const { content } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // Section to scroll to once the mobile menu has closed; scrolling earlier gets
  // interrupted when the sheet releases its scroll lock.
  const pendingTarget = useRef<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: content.nav.about },
    { href: '#projects', label: content.nav.projects },
    { href: '#skills', label: content.nav.skills },
    { href: '#contact', label: content.nav.contact },
  ];

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2" prefetch={false}>
          <Bot className="h-8 w-8 shrink-0 text-primary" />
          <span className="truncate font-headline text-xl font-bold">{content.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-foreground/80 transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-64"
              onCloseAutoFocus={(event) => {
                if (!pendingTarget.current) return;
                event.preventDefault();
                document.querySelector(pendingTarget.current)?.scrollIntoView({ behavior: 'smooth' });
                pendingTarget.current = null;
              }}
            >
              <SheetTitle className="font-headline">{content.name}</SheetTitle>
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
                    prefetch={false}
                    onClick={(event) => {
                      event.preventDefault();
                      pendingTarget.current = link.href;
                      setMenuOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
