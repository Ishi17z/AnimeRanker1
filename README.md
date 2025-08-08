# AnimeRate

Una aplicación web para puntuar y descubrir anime. Los usuarios pueden buscar series de anime, puntuarlas en una escala del 1 al 10, y explorar series populares y joyas ocultas.

## Características

- 🔍 **Búsqueda de Anime**: Busca entre miles de series de anime usando la API de Jikan (MyAnimeList)
- ⭐ **Sistema de Puntuación**: Puntúa anime del 1 al 10 con estrellas interactivas
- 🏆 **Ranking**: Ve los anime mejor puntuados por la comunidad
- 💎 **Joyas Ocultas**: Descubre anime de alta calidad pero poco conocidos
- 🌐 **Multiidioma**: Soporte para español e inglés
- 📱 **Diseño Responsive**: Optimizado para móviles y desktop
- 💾 **Almacenamiento Local**: Tus puntuaciones se guardan en tu navegador

## Tecnologías

- **Frontend**: React 18 + TypeScript
- **Estilos**: Tailwind CSS + Shadcn/ui
- **Routing**: Wouter
- **Estado**: TanStack Query
- **API**: Jikan API v4 (MyAnimeList)
- **Almacenamiento**: localStorage del navegador
- **Deployment**: GitHub Pages

## Desarrollo Local

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/AnimeRate.git
cd AnimeRate
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre [http://localhost:5000](http://localhost:5000) en tu navegador

## Deployment a GitHub Pages

Este proyecto está configurado para deployment automático a GitHub Pages usando GitHub Actions.

### Configuración:

1. Ve a la configuración de tu repositorio en GitHub
2. En la sección "Pages", selecciona "GitHub Actions" como fuente
3. Haz push a la rama `main` o `master`
4. El workflow automáticamente construirá y desplegará la aplicación

### Configuración Manual:

Si prefieres deployment manual:

```bash
# Construir para producción
npm run build

# Los archivos estáticos estarán en la carpeta dist/
```

## Estructura del Proyecto

```
client/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── contexts/       # Contextos de React (idioma, etc.)
│   ├── lib/           # Utilities y servicios
│   ├── pages/         # Páginas de la aplicación
│   ├── types/         # Tipos de TypeScript
│   └── index.css      # Estilos globales
├── public/            # Archivos estáticos
└── index.html         # HTML principal
```

## Funcionalidades

### Páginas Principales

- **Inicio**: Muestra anime populares con estadísticas del usuario
- **Ranking**: Top 20 de anime mejor puntuados
- **Joyas**: Anime de alta calidad pero poco conocidos (>8.0 puntuación, <50k votos)

### Componentes Clave

- **AnimeCard**: Tarjeta de anime con imagen, información y sistema de puntuación
- **RatingStars**: Estrellas interactivas para puntuar
- **SearchHeader**: Barra de búsqueda con selector de idioma
- **SidebarFilters**: Filtros por género, puntuación, estado, etc.

## API y Datos

- **Fuente de Datos**: [Jikan API](https://jikan.moe/) (API oficial de MyAnimeList)
- **Límites de Rate**: Respeta los límites de la API de Jikan
- **Cache**: Los datos se cachean en localStorage para navegación offline
- **Puntuaciones**: Se almacenan localmente en el navegador

## Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -m 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ve el archivo [LICENSE](LICENSE) para más detalles.

## Créditos

- Datos de anime proporcionados por [MyAnimeList](https://myanimelist.net/)
- API por [Jikan](https://jikan.moe/)
- Iconos por [Lucide](https://lucide.dev/)