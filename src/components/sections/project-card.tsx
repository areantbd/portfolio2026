"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, Link as LinkLogo } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { linksData } from "@/lib/links";

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
  const projectLink = linksData.projects.find((p) => p.id === project.id);

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50">
      {projectLink?.image && (
        <div className="relative h-48 w-full">
          <Image
            src={projectLink.image}
            alt={project.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-between">
        <div>
          <h4 className="mb-2 text-sm font-semibold">
            {content.projects.techUsed}
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-2">
          {projectLink?.repo &&
            <Button asChild variant="outline" className="w-full">
            <Link
              href={projectLink?.repo ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              >
              <Github className="mr-2 h-4 w-4" />
              {content.projects.viewCode}
            </Link>
          </Button>
          }
          {projectLink?.demo &&
            <Button asChild variant="outline" className="w-full">
            <Link
              href={projectLink?.demo ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              >
              <LinkLogo className="mr-2 h-4 w-4" />
              {content.projects.demo}
            </Link>
          </Button>
          }
        </div>
      </CardContent>
    </Card>
  );
}
