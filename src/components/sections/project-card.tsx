'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Github } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { content } = useLanguage();
  const projectImage = PlaceHolderImages.find(p => p.id === `project-${project.id}`);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      {projectImage && (
        <div className="relative h-48 w-full">
            <Image
                src={projectImage.imageUrl}
                alt={project.title}
                fill
                style={{ objectFit: 'cover' }}
                data-ai-hint={projectImage.imageHint}
            />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="mb-2 text-sm font-semibold">{content.projects.techUsed}</h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Button asChild variant="outline" className="w-full">
            <Link href="https://github.com/ivan-rdg" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {content.projects.viewCode}
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
