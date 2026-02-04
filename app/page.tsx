'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, ExternalLink, Mail, Terminal, Cpu, Zap, LucideIcon } from "lucide-react"

function AnimatedGrid() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgb(59 130 246 / 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(59 130 246 / 0.1) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1000ms' }} />
    </div>
  )
}

interface GlowingCardProps {
  title: string;
  desc: string;
  link: string;
  tags: string[];
  icon: LucideIcon;
}

function GlowingCard({ title, desc, link, tags, icon: Icon }: GlowingCardProps) {
  return (
    <Card className="group relative overflow-hidden bg-slate-900/50 border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

      <CardHeader className="relative">
        <div className="flex items-start justify-between mb-2">
          <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
            <Icon className="h-5 w-5 text-blue-400" />
          </div>
        </div>
        <CardTitle className="text-xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </CardTitle>
        <CardDescription className="text-slate-400 text-base leading-relaxed">
          {desc}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative">
        <div className="flex flex-wrap gap-2">
          {tags?.map((tag: string, i: number) => (
            <Badge
              key={i}
              variant="secondary"
              className="bg-slate-800/80 text-slate-300 border-slate-700 hover:border-blue-500/50 hover:bg-slate-800 transition-colors font-mono text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="relative">
        <Button
          variant="outline"
          size="sm"
          asChild
          className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500 transition-all group/btn"
        >
          <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Terminal className="h-4 w-4" />
            View Source
            <ExternalLink className="h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen text-slate-100 relative">
      <AnimatedGrid />

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Terminal className="h-6 w-6 text-cyan-400" />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              tanishk.dev
            </span>
          </div>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10" asChild>
              <a href="#projects">Projects</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10" asChild>
              <a href="#skills">Skills</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-slate-400 hover:text-blue-400 hover:bg-blue-500/10" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 md:py-40 relative">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }} />

        <div className="max-w-5xl mx-auto relative">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse" style={{ animationDelay: '150ms' }} />
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-slate-500 font-mono text-sm">~/portfolio</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Hi, I&apos;m Tanishk Gupta
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-400 mb-4 font-light">
            GenAI & Backend Engineer building intelligent systems and AI-powered SaaS tools.
          </p>

          <p className="text-xl text-slate-500 mb-12 max-w-3xl">
            Crafting real-world applications with <span className="text-cyan-400 font-semibold">Next.js</span>,
            <span className="text-blue-400 font-semibold"> Python</span>, and
            <span className="text-cyan-400 font-semibold"> Go</span>.
            Focused on RAG pipelines, LLM applications, backend systems, and AI-powered SaaS architectures.
          </p>

          <div className="flex flex-wrap gap-4" id="contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white border-0 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] transition-all"
              asChild
            >
              <a href="mailto:guptatanishk8090@gmail.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Get In Touch
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50 backdrop-blur-sm"
              asChild
            >
              <a href="https://github.com/tanishkgupta-18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-cyan-500/50 backdrop-blur-sm"
              asChild
            >
              <a href="https://www.linkedin.com/in/tanishk-gupta18/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-blue-500/50 backdrop-blur-sm"
              asChild
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-6 py-24 relative" id="projects">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-slate-500 text-lg">Building solutions that matter</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <GlowingCard
              icon={Terminal}
              title="Codementor AI"
              desc="FastAPI + LLM assistant that helps users solve LeetCode problems with explanations."
              link="https://github.com/tanishkgupta-18/codementor-ai"
              tags={["FastAPI", "Python", "LLM", "Education"]}
            />

            <GlowingCard
              icon={Cpu}
              title="Framely – AI Image Editing SaaS"
              desc="Next.js + Cloudinary app for social media formatting, background removal, and generative backgrounds."
              link="https://github.com/tanishkgupta-18/Framely"
              tags={["Next.js", "Cloudinary", "AI", "SaaS"]}
            />

            <GlowingCard
              icon={Zap}
              title="StackQuery"
              desc="Full-stack Question & Answer platform built for developers — allowing users to ask, answer, and explore technical questions."
              link="https://github.com/tanishkgupta-18/StackQuery"
              tags={["Next.js", "MongoDB", "Developer Tools", "Q&A"]}
            />

            <GlowingCard
              icon={Terminal}
              title="GoFr URL Shortener"
              desc="Go + MongoDB URL shortener with tracking, analytics, and Chrome extension."
              link="https://github.com/tanishkgupta-18/url-shortener"
              tags={["Go", "MongoDB", "Analytics", "Extension"]}
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-24 relative" id="skills">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tech Stack
            </h2>
            <p className="text-slate-500 text-lg">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* GenAI & AI Systems */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-cyan-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
                  <Cpu className="h-6 w-6" />
                  GenAI & AI Systems
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["RAG", "LLMs", "Prompt Engineering", "FastAPI", "Celery", "Redis"].map((skill) => (
                    <Badge key={skill} className="bg-slate-800/80 text-slate-300 border-slate-700 font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Engineering */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                  <Terminal className="h-6 w-6" />
                  Backend Engineering
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express.js", "MongoDB", "SQL", "REST APIs", "Go", "Python"].map((skill) => (
                    <Badge key={skill} className="bg-slate-800/80 text-slate-300 border-slate-700 font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Cloud & DevOps
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "AWS", "Git", "GitHub", "Next.js"].map((skill) => (
                    <Badge key={skill} className="bg-slate-800/80 text-slate-300 border-slate-700 font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Frontend */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-8 rounded-2xl bg-slate-900/50 border border-slate-800 backdrop-blur-sm hover:border-blue-500/50 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-2">
                  <Zap className="h-6 w-6" />
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["React", "Tailwind CSS", "Streamlit"].map((skill) => (
                    <Badge key={skill} className="bg-slate-800/80 text-slate-300 border-slate-700 font-mono">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/50 backdrop-blur-sm bg-slate-950/30">
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 text-cyan-400" />
              <span className="text-slate-400 font-mono">
                © {new Date().getFullYear()} Tanishk Gupta • Built with Next.js & shadcn/ui
              </span>
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/tanishkgupta-18" className="text-slate-500 hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/in/tanishk-gupta18/" className="text-slate-500 hover:text-cyan-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:guptatanishk8090@gmail.com" className="text-slate-500 hover:text-blue-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}