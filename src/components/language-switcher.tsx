'use client';
import { Languages } from 'lucide-react';
import { useLanguage, type Language } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('en')}
          disabled={language === 'en'}
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('es')}
          disabled={language === 'es'}
        >
          Español
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => handleLanguageChange('gal')}
          disabled={language === 'gal'}
        >
          Galego
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
