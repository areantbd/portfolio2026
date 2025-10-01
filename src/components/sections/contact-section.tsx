'use client';
import Link from 'next/link';
import { Mail, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
    const { content } = useLanguage();

    return (
        <section id="contact" className="w-full py-20 md:py-32">
            <div className="container mx-auto flex max-w-2xl flex-col items-center justify-center space-y-4 px-4 text-center md:px-6">
                <div className="space-y-2">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                        {content.contact.title}
                    </h2>
                    <p className="text-muted-foreground md:text-xl">
                        {content.contact.description}
                    </p>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg">
                        <Link href="mailto:areantbd@gmail.com">
                            <Mail className="mr-2 h-5 w-5" /> {content.contact.email}
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="https://github.com/areantbd" target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-5 w-5" /> {content.contact.github}
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="https://www.linkedin.com/in/ivanwebdev" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-5 w-5" /> {content.contact.linkedin}
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
