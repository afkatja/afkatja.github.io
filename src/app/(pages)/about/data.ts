import { Code2, Camera, Palette, Zap, Users } from "lucide-react"
const summary = `I design and build fast, accessible web experiences and capture the world through photography. With 10+ years in web development and a strong visual storytelling background, I bring a rare mix of engineering rigor and creative direction to every project — whether it’s a product interface, a brand site, or a photo series.`

const about = `# My Journey: Code, Creativity & Exploration

## A Decade in Web Development

Over the past 10+ years, the through-line in my career has been simple: turning ideas into reliable, human-centered web experiences. What began as curiosity about how a browser renders a few lines of code has evolved into building complex systems, polished interfaces, and products that real people rely on.

### Professional Evolution
- **Agency roots**: Learned the fundamentals of modern frontend development at a major web agency, collaborating with designers and backend engineers to ship production-ready sites.​

- **Enterprise projects**: Helped deliver and evolve large-scale applications for clients like Staatsloterij, Schooltas, and Greenwheels.nl, working in cross-functional teams with established processes and high reliability requirements.​

- **Independent builder**: As an independent developer, I have designed, built, and maintained platforms such as Costa Rica Now, Trade Pulse, FincaGuarumo.com, BarraDelColorado.com, and this portfolio, owning everything from architecture and implementation to deployment and iteration.  

### Embracing AI & Solo Projects
In recent years, a big focus of my work has been exploring how AI can extend what a single developer or small team can ship. I have:​
- Integrated AI models into real products, from travel and trading assistants with RAG-style context to features powered by OpenAI and Google Vision API.
- Used AI tools for “vibe coding” sessions, rapid prototyping, debugging, test generation, and content workflows, treating AI as a teammate rather than a gimmick.
- Designed and iterated on AI-assisted user flows that still feel intuitive, transparent, and trustworthy to end users.

### How I Work: Independently and in Teams
I’m comfortable owning a project end to end—scoping, breaking down work, making technical decisions, and shipping to production as a solo developer. At the same time, years in agency and product teams taught me how to collaborate closely with Product, Design, and Backend, give and receive feedback, and keep communication clear and honest.​

Whether working solo or embedded in a squad, the goal is the same: de-risk complexity early, keep the feedback loop tight, and continuously refine the experience.

### Beyond the Code
My path has taken me from European tech hubs to the Costa Rican jungle, where I balance web development with wildlife photography, reforestation projects, and building an off-grid life. That mix of structure and unpredictability keeps me adaptable, curious, and comfortable operating outside of my comfort zone.

### What Drives Me
For me, coding is both craft and problem-solving:
- Break down complex problems into small, testable steps.
- Learn fast by prototyping, measuring, and iterating.​
- Treat every challenge—technical or human—as a chance to grow the system and myself.

The thread through all of this: frontend work, AI integration, solo projects, and team collaborations — is a desire to keep learning and to ship things that are genuinely useful.
`

const skills = [
  { name: "React/Next.js", level: 95, icon: Code2 },
  { name: "TypeScript", level: 90, icon: Code2 },
  { name: "AI Integration", level: 60, icon: Zap },
  { name: "UI/UX Design", level: 85, icon: Palette },
  { name: "Design Systems", level: 80, icon: Palette },
  { name: "Wildlife Photography", level: 95, icon: Camera },
  { name: "Landscape Photography", level: 85, icon: Camera },
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

export { summary, about, skills, achievements, stats }
