export interface FAQItem {
  question: string
  answer: string
}

export const faqData: FAQItem[] = [
  {
    question: "What kind of AI projects does Katia build?",
    answer:
      "I build AI-integrated web applications that combine React/Next.js with modern AI technologies. My projects include travel assistants with RAG-style context, trading platforms with AI-powered insights, booking systems with intelligent automation, and content management systems enhanced with LLM capabilities. I focus on practical AI solutions that enhance user experience while maintaining reliability and performance.",
  },
  {
    question: "How does Katia integrate RAG into web apps?",
    answer:
      "I implement Retrieval-Augmented Generation (RAG) by connecting LLMs to structured data sources like CMS content, databases, and APIs. My approach includes creating context-aware prompts, implementing efficient vector search or database queries, and building evaluation loops to ensure AI responses stay grounded and relevant. I've used RAG in travel platforms, content assistants, and knowledge management systems to provide accurate, context-specific answers.",
  },
  {
    question: "Is Katia available for remote work?",
    answer:
      "Yes, I'm available for remote work and freelance projects. Based in Costa Rica, I work with clients globally and have experience collaborating with distributed teams. I can take on full-stack development projects, AI integrations, or consulting roles. Whether you need a solo developer for end-to-end project delivery or an AI specialist to join your team, I'm open to discussing opportunities.",
  },
  {
    question: "What technologies does Katia specialize in?",
    answer:
      "I specialize in React, Next.js, and TypeScript for frontend development, with extensive experience in full-stack Node.js applications. My AI expertise includes LLM integration, RAG implementations, and building AI agents. I'm also skilled in UI/UX design, design systems, and modern web performance optimization. Additionally, I work with various APIs, databases, and cloud services to deliver complete solutions.",
  },
  {
    question: "Does Katia work with small businesses or startups?",
    answer:
      "Absolutely. I have experience working with businesses of all sizes, from enterprise clients like Staatsloterij to startups and non-profits. I can help with MVP development, product iteration, and scaling applications. My independent development experience includes building platforms like Costa Rica Now and Trade Pulse from scratch, so I understand the needs and constraints of smaller teams and businesses.",
  },
  {
    question: "Can Katia help with existing projects that need AI integration?",
    answer:
      "Yes, I can integrate AI capabilities into existing applications. Whether you need to add chat features, implement RAG for content search, or enhance your app with intelligent automation, I can work with your current codebase. I focus on minimal disruption while adding meaningful AI features that improve user experience and business value.",
  },
  {
    question: "What's Katia's approach to AI project development?",
    answer:
      "My approach emphasizes practical, user-centered AI solutions. I start with understanding the real problem, then prototype and iterate quickly. I prioritize reliability and explainability over complexity, implement proper evaluation loops, and ensure AI features integrate seamlessly with existing workflows. I also consider factors like latency, cost, and privacy when choosing AI models and architectures.",
  },
  {
    question: "Does Katia offer consulting or strategy services?",
    answer:
      "Yes, I provide AI and web development consulting services. This includes helping teams plan AI integrations, choose appropriate technologies, architect scalable solutions, and implement best practices. I can assist with technical strategy, code reviews, and hands-on implementation. My consulting draws from 15+ years of web development experience and recent focus on AI-powered applications.",
  },
]

export const generateFAQSchema = (faqs: FAQItem[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}
