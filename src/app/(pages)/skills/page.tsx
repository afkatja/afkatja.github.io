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

### Development Tools & Platforms
- **Version Control**: GitHub
- **Deployment**: Netlify
- **CI/CD**: Continuous Integration/Continuous Deployment tools
- **Additional Tools**: Webpack, Grunt, GraphQL

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

> "Technology is best when it brings people together, solves complex problems, and creates meaningful experiences."`

const Skills = () => {
  return (
    <PagesLayout>
      <Markdown>{content}</Markdown>
    </PagesLayout>
  )
}

export default Skills
