import Markdown from "react-markdown"
import PagesLayout from "../pagesLayout"

const about = `# My Journey: Code, Creativity, and Continuous Growth

## A 12-Year Odyssey in Web Development

My web development journey began over a decade ago, sparked by a simple, magical moment: typing code and watching things come alive on screen. What started as fascination quickly became a profound passion – the ability to create complex systems, beautiful layouts, and intricate animations with nothing more than a keyboard and imagination.

### Professional Evolution

I've navigated through diverse technological landscapes:

- **Early Years**: Cutting my teeth at a major web agency, learning the foundational craft of web development
- **Corporate Innovation**: Developing sophisticated web applications for large-scale enterprises
- **Pinnacle Project**: Crafting the comprehensive web application for Greenwheels.nl, a testament to solving complex user management and booking challenges

### The Philosophy of Code

For me, programming is more than a technical skill – it's an art of problem-solving. My approach is simple yet powerful:

- **Break Down Complexity**: One line of code at a time
- **Embrace Learning**: Dive in, experiment, make mistakes
- **Continuous Improvement**: Review, revise, and refine
- **Adaptability**: See challenges as opportunities for growth

### From European Tech Scenes to Costa Rican Adventures

After years of urban development work, I traded city skylines for tropical forests. Costa Rica became more than a location – it became a canvas for personal and professional reinvention. Here, between wildlife photography, construction projects, and web development, I've discovered that true innovation knows no boundaries.

### What Drives Me

The most empowering aspect of web development? The ability to transform abstract ideas into tangible, functional digital experiences. Each project is a puzzle, each line of code a potential solution waiting to be discovered.

> In code, as in life, the journey is about continuous learning, embracing challenges, and creating something meaningful.`

export default function About() {
  return (
    <PagesLayout>
      <Markdown>{about}</Markdown>
    </PagesLayout>
  )
}
