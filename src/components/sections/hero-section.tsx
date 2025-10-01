'use client';
import Image from 'next/image';
import { useLanguage } from '@/contexts/language-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function HeroSection() {
    const { content } = useLanguage();
    const profileImage = '/profile.jpg';

    return (
        <section id="about" className="w-full py-20 md:py-32 bg-card">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid gap-10 lg:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            <h1 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                {content.name}
                            </h1>
                            <h2 className="text-xl font-medium text-primary md:text-2xl">
                                {content.role} - {content.location}
                            </h2>
                        </div>
                        <p className="max-w-[600px] text-muted-foreground md:text-xl">
                            {content.profile.summary}
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <Card className="w-full max-w-md">
                            <CardHeader>
                                <div className="flex justify-center">
                                    {profileImage && (
                                        <Image
                                            src={profileImage}
                                            alt={content.name}
                                            width={150}
                                            height={150}
                                            className="rounded-full border-4 border-primary shadow-lg"
                                            data-ai-hint={profileImage}
                                        />
                                    )}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="font-headline mb-4">{content.profile.skillsTitle}</CardTitle>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {content.skillList.slice(0, 9).map((skill) => (
                                        <Badge key={skill} variant="secondary">{skill}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
