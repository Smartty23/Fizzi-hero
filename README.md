# Fizzi Hero - Interactive 3D Landing Page

## Project Overview

Fizzi Hero is an innovative web application showcasing an interactive landing page with advanced 3D animations, built using cutting-edge web technologies. Experience immersive 3D soda can visualizations with smooth animations and dynamic content management.

## Demo

![Fizzi Hero Demo](resources/front.gif)

> A stunning 3D interactive experience featuring animated soda cans with smooth transitions and engaging visual effects.


## Tech Stack

- **Frontend Framework**: Next.js
- **3D Graphics**: React Three Fiber, Three.js
- **Animation**: GSAP (GreenSock Animation Platform)
- **Styling**: Tailwind CSS
- **CMS**: Prismic

## Key Features

### 1. Dynamic Content Management
- Utilizes Prismic CMS with Slice Machine
- Modular, reusable content blocks
- Automatic TypeScript type generation for content slices

### 2. 3D Visualization
- Interactive 3D soda can models
- Custom 3D scenes with floating and animated elements
- Responsive canvas rendering across devices

### 3. Performance Optimizations
- Next.js font optimization
- Tailwind CSS purging unused styles
- Efficient 3D model loading with preloading techniques

## Technical Deep Dive

### Content Architecture
- Prismic Slice Machine enables dynamic content creation
- Each slice represents a reusable, flexible content block
- Automatic TypeScript type generation for robust type-checking

### Animation Techniques
- GSAP Timeline for sequenced animations
- Scroll-triggered animations
- Text and character-level animations
- 3D object transformations

### 3D Rendering
- React Three Fiber for declarative 3D graphics
- Custom GLTF model rendering
- Advanced texture and material management
- Performance monitoring with r3f-perf

### State Management
- Zustand for lightweight state control
- Tracking asset loading and scene readiness

## Development Workflow

1. Local development with Prismic Slice Machine
2. Content creation in Prismic dashboard
3. Automatic type generation
4. Responsive design implementation
5. Animation and interaction layer

## Performance Considerations

- Single WebGL context using React Drei's View component
- Optimized 3D model loading
- Suspense for asset management
- Tailwind CSS performance optimization

## Key Components
### 3D Scene Components

- SodaCan.tsx: Custom 3D soda can model renderer
- FloatingCan.tsx: Animated floating can component
- HeroScene.tsx: Main landing page 3D scene

### Slice Components

- Hero: Initial landing page slice
- SkyDive: Animated scrolling slice
- Carousel: Interactive flavor selection slice

## Animations and Interactions
### GSAP Animations

- Intro timeline with staggered element appearances
- Scroll-triggered animations
- 3D object transformations
- Character and text animations

### Scroll Interactions

- Smooth scrolling effects
- Parallax-like 3D object movements
- Dynamic content reveal

### Optimization Techniques

- Preloading 3D models with useGLTF.preload()
- Efficient WebGL context management
- Lazy loading with React Suspense
- Performance monitoring with r3f-perf

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Prismic account

### Installation
```bash
git clone https://github.com/Smartty23/Fizzi-hero.git
cd Fizzi-hero
npm install
npm run dev
```

### Environment Setup
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_PRISMIC_ENVIRONMENT=fizzipop
```

### Running the Project
- Development server: `npm run dev`
- Slice Machine: Runs automatically with dev server at http://localhost:9999
- Production build: `npm run build`
- Start production: `npm start`

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Contact

**Developer**: Abraham Che  
**GitHub**: [@Smartty23](https://github.com/Smartty23)  
**Email**: abrahamche82@gmail.com  
**Phone**: +234 806 292 3229

## Acknowledgments

-  - Original concept and inspiration
- [Prismic](https://github.com/prismicio) - Headless CMS platform
- [Three.js](https://threejs.org/) - 3D graphics library
- [GSAP](https://greensock.com/gsap/) - Animation platform

## License

This project is licensed under the Apache-2.0 License - see the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by [Abraham Che](https://github.com/Smartty23)
