# Iván Rodríguez — Portfolio

Portfolio personal de desarrollador FullStack hecho con Next.js 15, React 18, Tailwind CSS y componentes shadcn/ui. Disponible en inglés, español y gallego, con tema claro/oscuro.

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:9002
npm run typecheck
npm run build
```

## Dónde editar

- `src/lib/content.ts` — textos de cada idioma (perfil, proyectos, skills).
- `src/lib/links.ts` — email, redes, CV y enlaces/imágenes de cada proyecto (por `id`).
- `src/lib/certifications.ts` — certificaciones (comunes a todos los idiomas).
- `public/images/` — foto de perfil y capturas de los proyectos.
- `src/components/sections/` — secciones de la página.
- `src/app/layout.tsx` — metadatos SEO.

Despliegue: Firebase App Hosting (`apphosting.yaml`).
