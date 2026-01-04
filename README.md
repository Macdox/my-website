# Portfolio Website

Welcome to my professional portfolio website! This is a modern, fully responsive portfolio showcasing my projects, skills, and experience as a developer.

**Live Demo:** [Link coming soon after publishing]

## About

This portfolio website is designed to showcase my work, skills, and professional experience. It features smooth animations, elegant transitions, and an intuitive user interface to provide visitors with an engaging browsing experience.

## Features

- 🎨 **Modern Design** - Clean and professional user interface
- ⚡ **Fast Performance** - Built with Next.js for optimal speed and SEO
- 📱 **Fully Responsive** - Seamless experience across all devices
- ✨ **Smooth Animations** - Elegant transitions and scroll effects using Lenis
- 🎯 **Project Showcase** - Detailed project cards and descriptions
- 📧 **Contact Section** - Easy way to get in touch
- 🚀 **Optimized** - Deployed on Vercel for production-ready performance

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org) - React framework for production
- **Language:** TypeScript - Type-safe JavaScript
- **Styling:** CSS - Custom styling with modern CSS features
- **Animation:** Lenis - Smooth scroll library
- **Deployment:** Vercel

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout component
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── AboutUs.tsx         # About section
│   ├── Project.tsx         # Project component
│   ├── ProjectTransition.tsx # Project transition effects
│   ├── ContactSection.tsx   # Contact form section
│   ├── LoadingScreen.tsx    # Loading screen
│   ├── LoaderOverlay.tsx    # Loader overlay
│   └── LenisProvider.tsx    # Smooth scroll provider
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Development

The page auto-updates as you edit components. Start by modifying files in the `src/app/` and `src/components/` directories.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Deployment

This website is ready for production deployment. The recommended platform is [Vercel](https://vercel.com), which is optimized for Next.js applications.

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Visit [Vercel](https://vercel.com) and connect your repository
3. Follow the deployment wizard - Vercel will automatically detect Next.js and configure it
4. Your site will be live and accessible via a unique URL

### Environment Variables

If needed, add environment variables in a `.env.local` file (not committed to version control):

```
NEXT_PUBLIC_API_URL=your_api_url
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Next.js features and API
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript guide
- [Lenis Documentation](https://lenis.darkroom.engineering/) - Smooth scroll library

## Contact

Feel free to reach out to me through the contact section on the website or via email.

## License

This project is open source and available under the MIT License.

---

Made with ❤️ by Maddox
