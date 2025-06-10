# Darshmello - ML & AI Engineer Portfolio

A modern, Apple-inspired portfolio website for a Machine Learning & AI Engineer, built with React using java script, html, and css.

## Features

- 🎨 Apple-inspired design language
- 📱 Fully responsive layout
- ⚡ Performance optimized
- 🌙 Dark mode
- 🎭 Smooth animations and transitions
- 📸 Photography gallery
- 📝 Blog section
- 🔍 SEO optimized

## Tech Stack

- React 18
- TypeScript
- Styled Components
- Framer Motion
- React Router
- Material-UI
- HTML
- CSS

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/darshmello/Darshmello.github.io.git
   cd Darshmello.github.io
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
src/
├── components/     # Reusable components
├── pages/         # Page components
├── styles/        # Global styles and theme
├── assets/        # Static assets
│   ├── fonts/     # Font files
│   ├── images/    # Image assets
│   └── icons/     # Icon assets
├── utils/         # Utility functions
└── data/          # Static data
```

## Customization

### Theme

The theme configuration can be found in `src/styles/theme.ts`. You can modify colors, typography, spacing, and other design tokens to match your preferences.

### Content

1. Update the content in the respective page components
2. Replace images in the `public` directory
3. Modify the navigation items in `src/components/Layout/Navigation.tsx`

### Fonts

The project uses Apple's SF Pro Display font. You'll need to:

1. Download the font files
2. Place them in the `public/fonts` directory
3. Update the font paths in `src/styles/GlobalStyles.ts`

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `build/` directory.

## Deployment

This project is configured for GitHub Pages deployment. The build process will automatically create a production-ready version of your site.

1. Push your changes to the main branch
2. GitHub Actions will automatically build and deploy your site
3. Your site will be available at `https://darshmello.github.io`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Apple Design Guidelines
- React Documentation
- Styled Components
- Framer Motion
