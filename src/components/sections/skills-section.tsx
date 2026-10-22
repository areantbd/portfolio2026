'use client';
import { useLanguage, type Language } from '@/contexts/language-context';
import { Award, Code2, ExternalLink } from 'lucide-react';
import { certifications } from '@/lib/certifications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Spelled out instead of using Intl so server and browser always render the same
// text (not every browser ships Galician locale data).
const monthNames: Record<Language, string[]> = {
    en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    es: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sept', 'oct', 'nov', 'dic'],
    gal: ['xan', 'feb', 'mar', 'abr', 'mai', 'xuñ', 'xul', 'ago', 'set', 'out', 'nov', 'dec'],
};

function formatDate(date: string, language: Language) {
    const [year, month] = date.split('-').map(Number);
    return `${monthNames[language][month - 1]} ${year}`;
}

export default function SkillsSection() {
    const { content, language } = useLanguage();

    return (
        <section id="skills" className="w-full py-12 md:py-32 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                        {content.skills.title}
                    </h2>
                </div>
                <div className="grid items-start gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Award className="h-8 w-8 text-primary" />
                            <CardTitle className="font-headline">{content.skills.certificationsTitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid gap-4 sm:grid-cols-2">
                                {certifications.map((cert) => (
                                    <li key={cert.name} className="flex flex-col">
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-primary"
                                        >
                                            {cert.name}
                                            <ExternalLink className="h-3.5 w-3.5 text-muted-foreground" />
                                        </a>
                                        <span className="text-sm text-muted-foreground">
                                            {cert.authority} · {formatDate(cert.date, language)}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Code2 className="h-8 w-8 text-primary" />
                            <CardTitle className="font-headline">{content.skills.skillsTitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {content.skillList.map((skill) => (
                                    <Badge key={skill} variant="default" className="bg-primary/90 hover:bg-primary text-primary-foreground">
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
