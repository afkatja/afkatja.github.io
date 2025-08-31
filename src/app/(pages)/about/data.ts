import { Code2, Camera, Palette, Zap, Users } from "lucide-react"

const about = `# My Journey: Code, Creativity & AI Exploration

## A Decade in Web Development

My web development path began 10+ years ago with a simple spark: writing code and watching ideas come alive on screen. What started as fascination grew into a deep passion for building complex systems, elegant interfaces, and meaningful digital experiences.

### Professional Evolution
- **Agency Roots**: Learning the craft at a major web agency  
- **Enterprise Projects**: Developing large-scale applications for clients like Staatsloterij, Schooltas, and Greenwheels.nl  
- **Independent Work**: Creating platforms such as **Fincaguarumo.com**, **Barradelcolorado.com**, and this portfolio site  

### Embracing AI & Solo Projects
Recently, I’ve been exploring how **AI can transform the way we build**. From vibe coding sessions to integrating the **Google Vision API** and experimenting with **OpenAI models**, I’m blending automation with creativity. These solo projects allow me to prototype fast, test ideas, and push the boundaries of what’s possible with modern tools.

### Beyond the Code
My journey also took me from European tech hubs to the Costa Rican jungle, where I balance web development with **wildlife photography, reforestation projects, and building an off-grid lifestyle**. These experiences continue to fuel my creativity and adaptability.

### What Drives Me
For me, coding is both **art and problem-solving**:  
- Break down complexity, one step at a time  
- Keep learning, experimenting, and refining  
- See every challenge as an opportunity for growth  

> In code, as in life, the real magic lies in learning continuously and creating something meaningful.
`

const skills = [
  { name: "React/Next.js", level: 95, icon: Code2 },
  { name: "TypeScript", level: 90, icon: Code2 },
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "Design Systems", level: 80, icon: Palette },
  { name: "Wildlife Photography", level: 95, icon: Camera },
  { name: "Landscape Photography", level: 85, icon: Camera },
  { name: "AI Generalist", level: 60, icon: Zap },
]

const achievements = [
  { year: "2025", title: "Freelance Developer", company: "Katia Hollaar" },
  { year: "2021", title: "Full Stack Developer", company: "Greenwheels BV" },
  {
    year: "2018",
    title: "Front-end developer",
    company: "Bolster",
  },
  {
    year: "2016",
    title: "Software developer",
    company: "Q42",
  },
]

const stats = [
  {
    icon: Code2,
    number: "10+",
    label: "Years of Web Dev Experience",
  },
  { icon: Code2, number: "5+", label: "Major Platforms Built" },
  { icon: Zap, number: "1", label: "AI-Powered Portfolio Project" },
  {
    icon: Camera,
    number: "10k+",
    label: "Photos Captured in the Wild",
  },
  { icon: Users, number: "10+", label: "Clients & Collaborations" },
]

export { about, skills, achievements, stats }
