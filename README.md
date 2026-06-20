# AprendeData

Plataforma educativa gratuita y sin fines de lucro para aprender **Data Engineering**, **Cloud** e **Inteligencia Artificial**. Todo el contenido es libre y accesible para cualquier persona.

---

## Stack

| Capa | Tecnología | Notas |
|---|---|---|
| Framework | Next.js 16 (App Router) | SSR + SSG, SEO optimizado |
| Estilos | Tailwind CSS v4 | Dark theme, diseño minimalista |
| Base de datos | Supabase (PostgreSQL) | Auth + DB + Storage |
| ORM | Prisma | Type-safe, migraciones |
| Videos | YouTube embed | Sin costo de hosting |
| Deploy | Vercel | Free tier |

---

## Estructura del proyecto

```
aprendedataorg/
├── prisma/
│   └── schema.prisma           # Modelos de base de datos
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout raíz (fuentes, metadata global)
│   │   ├── page.tsx            # Página coming soon con countdown
│   │   ├── globals.css         # Variables CSS + estilos base
│   │   ├── (platform)/         # Grupo de rutas de la plataforma educativa
│   │   │   ├── layout.tsx      # Layout con Navbar
│   │   │   ├── cursos/
│   │   │   │   ├── page.tsx            # Grid de cursos
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Detalle de curso + lecciones
│   │   │   └── lecciones/
│   │   │       └── [id]/
│   │   │           └── page.tsx        # Player YouTube + info
│   │   └── api/
│   │       └── subscribe/
│   │           └── route.ts    # Endpoint captura de emails
│   ├── components/
│   │   ├── coming-soon/
│   │   │   ├── Countdown.tsx   # Temporizador animado
│   │   │   ├── EmailForm.tsx   # Formulario de suscripción
│   │   │   └── Socials.tsx     # Links a redes sociales
│   │   ├── layout/
│   │   │   └── Navbar.tsx      # Barra de navegación principal
│   │   └── platform/
│   │       └── CourseCard.tsx  # Tarjeta de curso para la grid
│   ├── lib/
│   │   ├── utils.ts            # Helpers (cn, formatters)
│   │   └── supabase/
│   │       ├── client.ts       # Cliente Supabase para el browser
│   │       └── server.ts       # Cliente Supabase para Server Components
│   └── types/
│       └── index.ts            # Tipos globales: Course, Lesson, Profile, etc.
├── .env.example                # Variables de entorno necesarias
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Modelos de base de datos

```prisma
Profile       # Perfil de usuario (extiende auth.users de Supabase)
Course        # Curso con slug, categoría, nivel, duración
Lesson        # Lección con youtube_id, orden, duración
UserProgress  # Progreso por usuario y lección
Subscriber    # Emails capturados en el coming soon
```

---

## Configurar Supabase (paso a paso)

### 1. Crear cuenta y proyecto

1. Ve a [supabase.com](https://supabase.com) y crea una cuenta gratuita
2. Click en **New project**
3. Elige un nombre (ej: `aprendedata`), una contraseña segura para la DB y la región más cercana (ej: `South America (São Paulo)`)
4. Espera ~2 minutos a que el proyecto inicialice

### 2. Obtener las credenciales

1. En el dashboard de tu proyecto ve a **Project Settings** (ícono de engranaje)
2. Click en **API** en el menú lateral
3. Copia estos tres valores:
   - `Project URL` → es tu `NEXT_PUBLIC_SUPABASE_URL`
   - `anon / public` key → es tu `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → es tu `SUPABASE_SERVICE_ROLE_KEY` (mantenla secreta, solo en servidor)

### 3. Obtener la cadena de conexión para Prisma

1. Ve a **Project Settings → Database**
2. Baja hasta la sección **Connection string**
3. Selecciona el modo **Transaction** (para `DATABASE_URL` — usado en runtime con pooling)
4. Selecciona el modo **Session** (para `DIRECT_URL` — usado por Prisma Migrate)
5. En ambas, reemplaza `[YOUR-PASSWORD]` con la contraseña que pusiste al crear el proyecto

### 4. Crear el archivo de variables de entorno

Crea un archivo `.env.local` en la raíz del proyecto (este archivo nunca se sube a git):

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Prisma + Supabase Postgres
DATABASE_URL="postgresql://postgres.xxxx:[PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.xxxx:[PASSWORD]@aws-0-sa-east-1.pooler.supabase.com:5432/postgres"

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Email capture (Google Apps Script)
SHEET_URL=https://script.google.com/macros/s/...
```

### 5. Aplicar el schema a la base de datos

```bash
# Genera el cliente de Prisma
npm run db:generate

# Aplica el schema a Supabase (crea todas las tablas)
npm run db:push
```

### 6. Verificar las tablas en Supabase

1. Ve a **Table Editor** en el dashboard de Supabase
2. Deberías ver las tablas: `profiles`, `courses`, `lessons`, `user_progress`, `subscribers`
3. También puedes explorarlas desde **Database → Tables**

### 7. Habilitar Auth (opcional, para cuando actives login)

1. Ve a **Authentication → Providers**
2. Habilita **Email** (ya viene activo por defecto)
3. Opcionalmente habilita **Google** o **GitHub** para OAuth

---

## Correr el proyecto en local

```bash
# Instalar dependencias
npm install

# Levantar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

---

## Scripts disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter
npm run db:generate  # Genera el cliente Prisma
npm run db:push      # Sincroniza el schema con Supabase
npm run db:studio    # Abre Prisma Studio (GUI para la DB)
```

---

## Roadmap

- [x] Página coming soon con countdown
- [x] Migración a Next.js
- [x] Estructura de plataforma educativa (cursos + lecciones)
- [x] Player de YouTube embed
- [x] Schema de base de datos (Prisma + Supabase)
- [ ] Conectar Supabase Auth (login con email/Google/GitHub)
- [ ] Conectar cursos y lecciones a la base de datos real
- [ ] Seguimiento de progreso del usuario
- [ ] Página de perfil
- [ ] Filtros y búsqueda de cursos
- [ ] Sistema de comentarios por lección

---

## Contribuir

Este es un proyecto sin fines de lucro. Si quieres contribuir con contenido, código o ideas, abre un issue o un pull request.

---

© 2026 AprendeData · Todos los derechos reservados
