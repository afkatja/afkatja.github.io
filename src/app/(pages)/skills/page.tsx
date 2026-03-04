import React from "react"
import Markdown from "react-markdown"
import PagesLayout from "../pagesLayout"

const content = `# Professional Skills

## Technical Expertise

### Primary Technologies
- **React**: Advanced development, creating scalable and performant web applications
- **Next.js**: Server-side rendering, static site generation, and optimized React applications
- **Sanity.io**: Headless CMS development, content management solution implementation

### Secondary Technologies
- **Vue.js**: Historical experience, foundational understanding
- **Angular**: Previous project work, basic framework knowledge

## AI & Full‑Stack Capabilities
- Design and implement full-stack LLM/RAG systems with React/Next.js frontends and Node.js or serverless backends, integrating external data sources and APIs.
- Integrate AI/ML services such as commercial LLM APIs, open-source models, and tools into existing applications.
- Build observability around AI features with logging, metrics, and UX feedback mechanisms to understand and improve model behavior over time.
- Collaborate closely with product and design to shape AI-powered user journeys, from first prompt to edge cases and failure modes.
- Optimize performance, accessibility, and responsiveness of AI-heavy interfaces, ensuring smooth experiences across devices.
- Use CI/CD and modern tooling to ship, test, and iterate on AI features reliably as part of a broader web application.

### Development Tools & Platforms
- **Version Control**: GitHub
- **Deployment**: Netlify/Vercel
- **CI/CD**: Continuous Integration/Continuous Deployment tools
- **Additional Tools**: Github actions, Netlify functions

## Technical Proficiencies
- Responsive Web Design
- Cross-Platform Development
- Performance Optimization
- Unit Testing
- Atomic Design Methodology
- Typescript Integration

## Soft Skills & Professional Approach

### Collaborative Strengths
- **Problem-Solving**: Systematic approach to complex technical challenges
- **Communication**: Bridging technical and non-technical team members
- **Adaptability**: Quickly learning and integrating new technologies

### Methodology
- Agile Development Practices
- Iterative Design and Development
- Continuous Learning Mindset

## Language Proficiencies
- **Programming Languages**: JavaScript, TypeScript
- **Human Languages**: Dutch, English, Spanish, Russian

> "Technology is best when it brings people together, solves complex problems, and creates meaningful experiences." 
`

const Skills = () => {
  return (
    <PagesLayout>
      <Markdown>{content}</Markdown>
    </PagesLayout>
  )
}

export default Skills
