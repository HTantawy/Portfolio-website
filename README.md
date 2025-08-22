# Personal Portfolio Website

A modern, responsive personal portfolio website showcasing professional experience, education, projects, and contact information.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Interactive Navigation**: Smooth scrolling navigation between sections
- **Professional Sections**:
  - Hero section with personal introduction
  - About section with professional summary
  - Experience timeline
  - Education background
  - Projects showcase
  - Contact information
- **Dark/Light Theme Support**: Theme switching capabilities
- **Animations**: Smooth animations and transitions

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: React Query

## Getting Started

### Prerequisites

- Node.js (recommended: install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-cv
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── About.tsx       # About section
│   ├── Contact.tsx     # Contact section
│   ├── Education.tsx   # Education section
│   ├── Experience.tsx  # Experience section
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation component
│   └── Projects.tsx    # Projects section
├── contexts/           # React contexts
├── hooks/              # Custom hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Static assets
```

## Customization

To customize this portfolio for your own use:

1. Update personal information in the component files
2. Replace images in the `public/` and `src/assets/` directories
3. Modify the resume PDF in `public/resume.pdf`
4. Update social media links and contact information
5. Add your own projects and experience details

## Deployment

The project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your repository and deploy with one click
- **GitHub Pages**: Use GitHub Actions for automated deployments

Build the project first:
```bash
npm run build
```

The `dist` folder contains the production-ready files.
