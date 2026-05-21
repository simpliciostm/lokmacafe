# Noura Atelier - Premium Landing Page

Landing page premium para cafeteria/restaurante contemporaneo, criada do zero com foco em sofisticacao, lifestyle e experiencia gastronomica.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Highlights

- Visual minimalista/editorial com atmosfera cinematografica
- Mobile-first real com responsividade completa
- Header transparente com blur no scroll + menu mobile elegante
- Hero full screen com imagem imersiva, overlay sofisticado e CTAs
- 10 secoes completas componentizadas
- Animacoes suaves e profissionais com Framer Motion
- Estrutura de dados por arrays (`lib/content.ts`) para facil manutencao
- SEO basico completo (`metadata`, `Open Graph`, `Twitter Card`, `canonical`)
- Favicon em `app/icon.svg`
- OG image dinamica em `app/opengraph-image.tsx`
- Pronto para deploy na Vercel ou Netlify

## Estrutura do projeto

```bash
.
├── app
│   ├── globals.css
│   ├── icon.svg
│   ├── layout.tsx
│   ├── opengraph-image.tsx
│   └── page.tsx
├── components
│   ├── sections
│   │   ├── ambience-experience.tsx
│   │   ├── differentials.tsx
│   │   ├── final-cta.tsx
│   │   ├── footer.tsx
│   │   ├── gallery.tsx
│   │   ├── gastronomic-experience.tsx
│   │   ├── header.tsx
│   │   ├── hero.tsx
│   │   ├── location.tsx
│   │   └── menu-preview.tsx
│   └── ui
│       ├── container.tsx
│       ├── fade-in.tsx
│       └── section-heading.tsx
├── lib
│   └── content.ts
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Build de producao:

```bash
npm run build
npm run start
```

## Personalizacao rapida

- Conteudo textual e listas: `lib/content.ts`
- Cores, fontes e sombras: `tailwind.config.ts`
- Tokens globais e base visual: `app/globals.css`
- SEO e metadata: `app/layout.tsx`

## Deploy

### Vercel

1. Suba o repositorio no GitHub.
2. Importe o projeto na Vercel.
3. Framework detectado: Next.js.
4. Deploy automatico.

### Netlify

1. Suba o repositorio no GitHub.
2. Importe o projeto na Netlify.
3. Build command: `npm run build`
4. Deixe o framework como Next.js (a Netlify aplica a configuracao adequada automaticamente).
5. Deploy.

## Observacoes

- Projeto sem backend e sem banco de dados, conforme solicitado.
- URLs de imagem utilizam Unsplash via `next/image` com dominio liberado em `next.config.ts`.
- WhatsApp/enderecos podem ser trocados facilmente nos componentes de `sections` e no `lib/content.ts`.
