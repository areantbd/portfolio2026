'use client';
import { useLanguage } from '@/contexts/language-context';
import { Award, Code2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
    const { content } = useLanguage();

    return (
        <section id="skills" className="w-full py-20 md:py-32 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                        {content.skills.title}
                    </h2>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                    <Card>
                        <CardHeader className="flex flex-row items-center gap-4">
                            <Award className="h-8 w-8 text-primary" />
                            <CardTitle className="font-headline">{content.skills.certificationsTitle}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-4">
                                {content.certificationList.map((cert) => (
                                    <li key={cert.name} className="flex flex-col">
                                        <span className="font-semibold">{cert.name}</span>
                                        <span className="text-sm text-muted-foreground">{cert.authority}</span>
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
