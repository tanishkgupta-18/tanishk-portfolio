'use client'

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Linkedin,
  FileText,
  ExternalLink,
  Mail,
  Terminal,
  Cpu,
  Zap,
  Brain,
  ScanSearch,
  BookOpen,
  Copy,
  Check,
  Server,
  Database,
  Layers,
  Code2,
  Workflow,
  Sparkles,
  ArrowUpRight,
  Menu,
  X,
  ShieldCheck,
  Activity
} from "lucide-react"

// Ambient Sun/Solar Glow Background
function SolarBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Deep warm background base */}
      <div className="absolute inset-0 bg-[#090807]" />

      {/* Subtle warm engineering grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(245, 158, 11, 0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(245, 158, 11, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px'
        }}
      />

      {/* Solar ambient warm gradients (subtle, non-distracting) */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[720px] h-[400px] bg-gradient-to-b from-amber-500/12 via-orange-500/6 to-transparent rounded-full blur-[120px]" />
      <div className="absolute top-[35%] -right-40 w-[500px] h-[500px] bg-amber-600/8 rounded-full blur-[140px]" />
      <div className="absolute top-[65%] -left-40 w-[500px] h-[500px] bg-orange-600/7 rounded-full blur-[140px]" />
    </div>
  )
}

// Project Interface
interface ProjectItem {
  title: string
  subtitle?: string
  desc: string
  link: string
  category: "ai" | "backend" | "fullstack"
  tags: string[]
  icon: typeof Terminal
  highlights?: string[]
}

const ALL_PROJECTS: ProjectItem[] = [
  {
    title: "Mind Mittra",
    subtitle: "ML Mental Health Assessment",
    category: "ai",
    icon: Brain,
    desc: "ML-powered mental health assessment platform featuring questionnaire-based anxiety prediction using a Random Forest classifier (89% accuracy), intelligent severity categorization, personalized coping recommendations, nearby mental health center discovery, and historical analytics dashboards for tracking user progress.",
    link: "https://github.com/tanishkgupta-18/mind-mittra",
    tags: ["React.js", "Python", "Flask", "Scikit-learn", "Random Forest", "SQLite", "Recharts", "Machine Learning"]
  },
  {
    title: "Road Damage Detector",
    subtitle: "Deep Learning Infrastructure Vision",
    category: "ai",
    icon: ScanSearch,
    desc: "Deep learning-based road damage detection system powered by YOLOv8, featuring image and video-based inference to identify and classify four types of road damage: longitudinal cracks, transverse cracks, alligator cracks, and potholes. Trained on the CRDDC2022 dataset with a Streamlit-powered interface for visualizing detection results and supporting infrastructure monitoring.",
    link: "https://github.com/tanishkgupta-18/Road-Damage-Detector",
    tags: ["Python", "YOLOv8", "PyTorch", "Computer Vision", "Deep Learning", "Streamlit", "CUDA", "OpenCV"]
  },
  {
    title: "GoFr URL Shortener",
    subtitle: "High-Concurrency URL Service",
    category: "backend",
    icon: Server,
    desc: "High-performance Go + MongoDB URL shortener featuring link tracking, analytics telemetry, low-latency redirection, and a companion Chrome extension for one-click URL generation.",
    link: "https://github.com/tanishkgupta-18/url-shortener",
    tags: ["Go", "MongoDB", "Analytics", "Chrome Extension", "REST API", "Concurrency"]
  },
  {
    title: "Formify",
    subtitle: "AI-Driven Dynamic Form Engine",
    category: "fullstack",
    icon: FileText,
    desc: "Full-stack AI-powered form builder featuring natural language-driven form generation using Google Gemini, dynamic field customization, theme personalization, secure authentication with Clerk, and a centralized dashboard for managing forms and submissions with a responsive user interface.",
    link: "https://github.com/tanishkgupta-18/Formify",
    tags: ["Next.js", "React", "TypeScript", "Gemini API", "Clerk", "TailwindCSS", "DaisyUI"]
  },
  {
    title: "Framely – AI Image Editing SaaS",
    subtitle: "Cloudinary Generative Studio",
    category: "fullstack",
    icon: Sparkles,
    desc: "Next.js + Cloudinary application for automated social media aspect-ratio formatting, background removal, and generative AI background replacement.",
    link: "https://github.com/tanishkgupta-18/Framely",
    tags: ["Next.js", "Cloudinary", "Generative AI", "SaaS Architecture"]
  },
  {
    title: "StackQuery",
    subtitle: "Developer Q&A Platform",
    category: "fullstack",
    icon: Code2,
    desc: "Full-stack Question & Answer platform built for developers — allowing users to ask, answer, and explore technical questions with markdown support and tag-based knowledge discovery.",
    link: "https://github.com/tanishkgupta-18/StackQuery",
    tags: ["Next.js", "MongoDB", "Developer Tools", "Q&A", "Full Stack"]
  }
]

export default function Home() {
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState<"all" | "ai" | "backend" | "fullstack">("all")

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("guptatanishk8090@gmail.com")
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2200)
  }

  const filteredProjects = ALL_PROJECTS.filter((item) => {
    if (projectFilter === "all") return true
    return item.category === projectFilter
  })

  return (
    <div className="min-h-screen text-stone-200 selection:bg-amber-500/25 selection:text-amber-200 font-sans relative antialiased">
      <SolarBackground />

      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#090807]/85 border-b border-stone-800/80 transition-all">
        <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="#"
            className="flex items-center gap-2.5 font-bold text-lg text-stone-100 hover:text-amber-400 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md px-1"
          >
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-500/40 transition-colors">
              <Terminal className="h-4 w-4" />
            </div>
            <span className="font-mono tracking-tight font-semibold">
              tanishk<span className="text-amber-400">.dev</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-stone-300">
            <a
              href="#featured"
              className="px-3.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-stone-900/60 transition-colors"
            >
              Featured Systems
            </a>
            <a
              href="#projects"
              className="px-3.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-stone-900/60 transition-colors"
            >
              All Projects
            </a>
            <a
              href="#skills"
              className="px-3.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-stone-900/60 transition-colors"
            >
              Technical Arsenal
            </a>
            <a
              href="#writing"
              className="px-3.5 py-1.5 rounded-md text-amber-400 hover:text-amber-300 hover:bg-amber-500/10 transition-colors flex items-center gap-1.5 font-medium"
            >
              <BookOpen className="h-3.5 w-3.5" />
              Writing (DevHum)
            </a>
            <a
              href="#achievements"
              className="px-3.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-stone-900/60 transition-colors"
            >
              Highlights
            </a>
            <a
              href="#contact"
              className="px-3.5 py-1.5 rounded-md hover:text-amber-300 hover:bg-stone-900/60 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-amber-500/30 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/60 hover:text-amber-200 transition-all font-medium text-xs h-8 px-3"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <FileText className="h-3.5 w-3.5 mr-1" />
                Resume
              </a>
            </Button>

            <Button
              size="sm"
              asChild
              className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs h-8 px-3.5 shadow-sm shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
            >
              <a href="mailto:guptatanishk8090@gmail.com">
                <Mail className="h-3.5 w-3.5 mr-1" />
                Get in Touch
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-stone-400 hover:text-stone-100 hover:bg-stone-900/80 border border-stone-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-stone-800 bg-[#0c0a09]/95 backdrop-blur-xl px-4 py-4 space-y-2">
            <a
              href="#featured"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-stone-300 hover:bg-stone-800/60 hover:text-amber-400 text-sm font-medium"
            >
              Featured Systems
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-stone-300 hover:bg-stone-800/60 hover:text-amber-400 text-sm font-medium"
            >
              All Projects
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-stone-300 hover:bg-stone-800/60 hover:text-amber-400 text-sm font-medium"
            >
              Technical Arsenal
            </a>
            <a
              href="#writing"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-amber-400 hover:bg-amber-500/10 text-sm font-medium flex items-center gap-2"
            >
              <BookOpen className="h-4 w-4" />
              Writing & DevHum
            </a>
            <a
              href="#achievements"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-stone-300 hover:bg-stone-800/60 hover:text-amber-400 text-sm font-medium"
            >
              Highlights
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-stone-300 hover:bg-stone-800/60 hover:text-amber-400 text-sm font-medium"
            >
              Contact
            </a>
            <div className="pt-2 border-t border-stone-800/80 flex flex-col gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="w-full border-amber-500/30 text-amber-300 justify-center text-xs"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-3.5 w-3.5 mr-1.5" />
                  View Resume
                </a>
              </Button>
              <Button
                size="sm"
                asChild
                className="w-full bg-amber-500 text-stone-950 font-semibold justify-center text-xs"
              >
                <a href="mailto:guptatanishk8090@gmail.com">
                  <Mail className="h-3.5 w-3.5 mr-1.5" />
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="container mx-auto px-4 sm:px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-4xl mx-auto">
            {/* Terminal Top Line & Availability Pill */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-stone-900/80 border border-stone-800 text-xs font-mono text-stone-400">
                <span className="text-amber-400">~/portfolio</span>
                <span className="text-stone-600">/</span>
                <span className="text-stone-300">sde-backend-genai</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-300 text-xs font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                Available for SDE, Backend & GenAI Roles
              </div>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-stone-100 tracking-tight leading-[1.08] mb-6">
              Hi, I&apos;m <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-amber-500 bg-clip-text text-transparent">Tanishk Gupta</span>.
            </h1>

            {/* Headline Role */}
            <p className="text-xl sm:text-2xl md:text-3xl text-stone-300 font-medium leading-snug mb-5">
              Software Development Engineer crafting <span className="text-amber-300 font-semibold">Distributed Backend Systems</span>, <span className="text-orange-400 font-semibold">GenAI Architectures</span>, and high-performance ML pipelines.
            </p>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-stone-400 leading-relaxed max-w-3xl mb-8">
              Focused on engineering production-grade software with <strong className="text-stone-200 font-medium">Python (FastAPI)</strong>, <strong className="text-stone-200 font-medium">Go</strong>, and <strong className="text-stone-200 font-medium">Next.js</strong>. Experienced in designing asynchronous task pipelines with message brokers (Celery, RabbitMQ), RAG retrieval workflows, in-memory ML inference, and observable full-stack SaaS platforms.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-12">
              <Button
                size="lg"
                asChild
                className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm px-6 h-11 shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all"
              >
                <a href="mailto:guptatanishk8090@gmail.com" className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-stone-700 bg-stone-900/40 text-stone-200 hover:bg-stone-800/80 hover:border-amber-500/50 hover:text-amber-300 text-sm h-11 px-5 transition-all"
              >
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Resume
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-stone-700 bg-stone-900/40 text-stone-200 hover:bg-stone-800/80 hover:border-amber-500/50 hover:text-amber-300 text-sm h-11 px-5 transition-all"
              >
                <a href="https://github.com/tanishkgupta-18" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-stone-700 bg-stone-900/40 text-stone-200 hover:bg-stone-800/80 hover:border-amber-500/50 hover:text-amber-300 text-sm h-11 px-5 transition-all"
              >
                <a href="https://www.linkedin.com/in/tanishk-gupta18/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>

            {/* Quick Architecture Callouts */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-stone-900/50 border border-stone-800/90 backdrop-blur-sm">
              <div className="border-r border-stone-800/70 last:border-0 pr-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Core Languages</div>
                <div className="text-sm font-semibold text-stone-200 mt-0.5">Python, Go, TypeScript</div>
              </div>
              <div className="border-r border-stone-800/70 sm:border-r last:border-0 pr-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Backend Systems</div>
                <div className="text-sm font-semibold text-stone-200 mt-0.5">FastAPI, Celery, Redis</div>
              </div>
              <div className="border-r border-stone-800/70 last:border-0 pr-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">AI / ML Domain</div>
                <div className="text-sm font-semibold text-stone-200 mt-0.5">RAG, LLMs, XGBoost, YOLO</div>
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-stone-500">Publication</div>
                <div className="text-sm font-semibold text-amber-400 mt-0.5 flex items-center gap-1">
                  <a href="https://devhum.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                    DevHum Blog <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: FLAGSHIP FEATURED PROJECTS (CodeMentor AI & SentinelAI) */}
        <section className="container mx-auto px-4 sm:px-6 py-16 border-t border-stone-800/70" id="featured">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                FLAGSHIP ARCHITECTURES
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
                Featured Systems
              </h2>
              <p className="text-stone-400 text-base max-w-2xl mt-2">
                Architected with emphasis on asynchronous execution, sub-millisecond inference, explainability, and distributed observability.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* FEATURED PROJECT 1: CodeMentor AI */}
              <div className="group relative rounded-2xl bg-gradient-to-b from-stone-900/90 to-stone-950 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-amber-500/5">
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/25 text-amber-400 group-hover:scale-105 transition-transform">
                      <Terminal className="h-6 w-6" />
                    </div>
                    <Badge className="bg-amber-500/15 text-amber-300 border-amber-500/30 text-xs font-mono font-medium">
                      Flagship GenAI System
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      CodeMentor AI
                    </h3>
                    <p className="text-amber-400/90 text-sm font-medium mt-1">
                      Agent-Style DSA Revision & LeetCode Analysis Engine
                    </p>
                  </div>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    Agent-style AI system that reviews LeetCode solutions, detects mistake patterns, and builds a personalized DSA revision plan using async evaluation, RAG-based analysis, and learning analytics (spaced-repetition heatmaps, improvement graphs).
                  </p>

                  {/* Architectural Breakdown */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-amber-400/90 flex items-center gap-1.5">
                      <Workflow className="h-3.5 w-3.5" />
                      Key Architectural Highlights
                    </div>
                    <ul className="text-xs text-stone-400 space-y-1.5 leading-normal">
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span><strong className="text-stone-300">Async Task Queue:</strong> Decoupled evaluation engine powered by Celery & RabbitMQ to handle multi-step LLM analysis asynchronously.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span><strong className="text-stone-300">RAG Pattern Detection:</strong> Context retrieval matching code patterns with algorithmic common errors and time complexity bottlenecks.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">•</span>
                        <span><strong className="text-stone-300">Analytics & Observability:</strong> Spaced-repetition scheduling heatmaps instrumented with Prometheus metrics and Grafana dashboards.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["FastAPI", "Python", "LLM", "RAG", "Celery", "RabbitMQ", "MongoDB", "Redis", "Docker", "Prometheus", "Grafana", "EdTech"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-stone-900 border border-stone-800 text-stone-300 group-hover:border-amber-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-amber-500/30 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/60 transition-all text-xs"
                  >
                    <a
                      href="https://github.com/tanishkgupta-18/codementor-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <Github className="h-3.5 w-3.5" />
                      View Source Code
                      <ExternalLink className="h-3 w-3 ml-0.5 opacity-70" />
                    </a>
                  </Button>

                  <span className="text-xs text-stone-500 font-mono">Distributed RAG Pipeline</span>
                </div>
              </div>

              {/* FEATURED PROJECT 2: SentinelAI */}
              <div className="group relative rounded-2xl bg-gradient-to-b from-stone-900/90 to-stone-950 border border-stone-800 hover:border-amber-500/50 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-lg shadow-black/40 hover:shadow-amber-500/5">
                <div className="space-y-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/25 text-orange-400 group-hover:scale-105 transition-transform">
                      <Zap className="h-6 w-6" />
                    </div>
                    <Badge className="bg-orange-500/15 text-orange-300 border-orange-500/30 text-xs font-mono font-medium">
                      Flagship ML Platform
                    </Badge>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                      SentinelAI
                    </h3>
                    <p className="text-orange-400/90 text-sm font-medium mt-1">
                      Real-Time Transaction Scoring & Explainable Fraud Engine
                    </p>
                  </div>

                  <p className="text-stone-300 text-sm leading-relaxed">
                    Full-stack real-time transaction scoring platform featuring an in-memory ML inference pipeline, SHAP explainability, continuous synthetic fraud simulation, and live operational monitoring with risk heatmaps and single-trip SQL analytics.
                  </p>

                  {/* Architectural Breakdown */}
                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-orange-400/90 flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Key Architectural Highlights
                    </div>
                    <ul className="text-xs text-stone-400 space-y-1.5 leading-normal">
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 font-bold">•</span>
                        <span><strong className="text-stone-300">Sub-Millisecond Inference:</strong> In-memory XGBoost inference engine capable of scoring transaction streams in real time.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 font-bold">•</span>
                        <span><strong className="text-stone-300">SHAP Explainability:</strong> Granular feature attribution for auditing flagged fraud decisions and anomaly scores.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-orange-400 font-bold">•</span>
                        <span><strong className="text-stone-300">Synthetic Traffic Generator:</strong> Real-time event simulator continuously feeding edge-case transactions with risk heatmaps.</span>
                      </li>
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["FastAPI", "Python", "XGBoost", "SHAP", "PostgreSQL", "React", "Vite", "Chakra UI", "Docker"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md text-xs font-mono bg-stone-900 border border-stone-800 text-stone-300 group-hover:border-orange-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-800/80 flex items-center justify-between">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="border-orange-500/30 text-orange-300 hover:bg-orange-500/15 hover:border-orange-500/60 transition-all text-xs"
                  >
                    <a
                      href="https://github.com/tanishkgupta-18/sentinel-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5"
                    >
                      <Github className="h-3.5 w-3.5" />
                      View Source Code
                      <ExternalLink className="h-3 w-3 ml-0.5 opacity-70" />
                    </a>
                  </Button>

                  <span className="text-xs text-stone-500 font-mono">Real-Time ML Pipeline</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: ALL ENGINEERING & PRODUCTION PROJECTS */}
        <section className="container mx-auto px-4 sm:px-6 py-16 border-t border-stone-800/70" id="projects">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-amber-400 text-xs font-mono mb-3">
                  <Layers className="h-3.5 w-3.5" />
                  REPOSITORIES & SYSTEMS
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
                  Engineering Projects
                </h2>
                <p className="text-stone-400 text-base max-w-xl mt-1.5">
                  Production systems across Computer Vision, Healthcare ML, AI SaaS, and Go microservices.
                </p>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-stone-900/80 border border-stone-800">
                <button
                  onClick={() => setProjectFilter("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    projectFilter === "all"
                      ? "bg-amber-500 text-stone-950 font-semibold shadow-xs"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  All ({ALL_PROJECTS.length})
                </button>
                <button
                  onClick={() => setProjectFilter("ai")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    projectFilter === "ai"
                      ? "bg-amber-500 text-stone-950 font-semibold shadow-xs"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  AI & ML
                </button>
                <button
                  onClick={() => setProjectFilter("backend")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    projectFilter === "backend"
                      ? "bg-amber-500 text-stone-950 font-semibold shadow-xs"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  Backend & Systems
                </button>
                <button
                  onClick={() => setProjectFilter("fullstack")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    projectFilter === "fullstack"
                      ? "bg-amber-500 text-stone-950 font-semibold shadow-xs"
                      : "text-stone-400 hover:text-stone-200"
                  }`}
                >
                  Full Stack
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, idx) => {
                const IconComponent = project.icon
                return (
                  <Card
                    key={idx}
                    className="group relative flex flex-col justify-between overflow-hidden bg-stone-900/50 border-stone-800/80 hover:border-amber-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-black/30"
                  >
                    <div>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500/20 transition-colors">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <Badge variant="outline" className="border-stone-800 text-stone-400 text-[11px] font-mono">
                            {project.category === "ai" ? "AI / ML" : project.category === "backend" ? "Backend" : "Full Stack"}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-stone-100 group-hover:text-amber-300 transition-colors">
                          {project.title}
                        </CardTitle>
                        {project.subtitle && (
                          <div className="text-xs font-mono text-amber-400/80 -mt-1">
                            {project.subtitle}
                          </div>
                        )}
                        <CardDescription className="text-stone-400 text-xs sm:text-sm leading-relaxed mt-2.5">
                          {project.desc}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="pt-0 pb-4">
                        <div className="flex flex-wrap gap-1.5">
                          {project.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2 py-0.5 rounded text-[11px] font-mono bg-stone-950/80 text-stone-300 border border-stone-800/90"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                    </div>

                    <CardFooter className="pt-2 border-t border-stone-800/60 flex items-center justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="border-stone-700 bg-stone-900/70 text-stone-300 hover:text-amber-300 hover:border-amber-500/50 text-xs h-8 px-3"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5"
                        >
                          <Github className="h-3.5 w-3.5" />
                          View Source
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                      <span className="text-[11px] font-mono text-stone-500">production code</span>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* SECTION 3: WRITING & KNOWLEDGE SHARING (DevHum) */}
        <section className="container mx-auto px-4 sm:px-6 py-16 border-t border-stone-800/70" id="writing">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono mb-3">
                <BookOpen className="h-3.5 w-3.5" />
                WRITING & KNOWLEDGE SHARING
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
                DevHum Publication
              </h2>
              <p className="text-stone-400 text-base max-w-2xl mt-1.5">
                Technical articles, architectural breakdowns, and engineering insights published on my platform.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-stone-900/90 via-stone-900/60 to-stone-950 border border-amber-500/30 p-6 sm:p-10 relative overflow-hidden group shadow-xl shadow-black/50">
              {/* Subtle solar flare background */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />

              <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-mono font-medium">
                      Featured Publication
                    </span>
                    <span className="text-xs font-mono text-stone-400">devhum.vercel.app</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-stone-100">
                    DevHum — Practical Engineering & AI Systems Publication
                  </h3>

                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                    I run <strong className="text-amber-300 font-semibold">DevHum</strong> (Developer Human), an engineering publication where I break down complex distributed backend architectures, RAG design patterns, LLM evaluation pipelines, and real-world system engineering decisions.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-3 pt-2">
                    <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/80">
                      <div className="text-amber-400 font-semibold text-xs mb-1 flex items-center gap-1.5">
                        <Server className="h-3.5 w-3.5" />
                        Backend Systems
                      </div>
                      <p className="text-stone-400 text-xs leading-normal">
                        Deep dives on message brokers (Celery, RabbitMQ), caching, and async API patterns.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/80">
                      <div className="text-amber-400 font-semibold text-xs mb-1 flex items-center gap-1.5">
                        <Cpu className="h-3.5 w-3.5" />
                        GenAI & RAG
                      </div>
                      <p className="text-stone-400 text-xs leading-normal">
                        Architecting vector search, agent loops, and cost-effective LLM evaluation pipelines.
                      </p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800/80">
                      <div className="text-amber-400 font-semibold text-xs mb-1 flex items-center gap-1.5">
                        <Activity className="h-3.5 w-3.5" />
                        System Reliability
                      </div>
                      <p className="text-stone-400 text-xs leading-normal">
                        Monitoring with Prometheus/Grafana, containerized workflows, and low-latency APIs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end gap-4 p-6 rounded-xl bg-stone-950/80 border border-stone-800">
                  <div className="w-full text-left">
                    <div className="text-xs font-mono uppercase tracking-wider text-stone-500">Live Website</div>
                    <div className="text-lg font-bold text-amber-300 mt-0.5">https://devhum.vercel.app</div>
                    <p className="text-stone-400 text-xs mt-1 leading-normal">
                      Read technical articles, system tutorials, and developer case studies.
                    </p>
                  </div>

                  <Button
                    size="lg"
                    asChild
                    className="w-full bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs sm:text-sm h-11 shadow-md shadow-amber-500/20"
                  >
                    <a
                      href="https://devhum.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <BookOpen className="h-4 w-4" />
                      Visit DevHum Website
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: TECHNICAL SKILLS & ARSENAL */}
        <section className="container mx-auto px-4 sm:px-6 py-16 border-t border-stone-800/70" id="skills">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
                <Code2 className="h-3.5 w-3.5" />
                TECHNICAL ARSENAL
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
                Skills & Technologies
              </h2>
              <p className="text-stone-400 text-base max-w-2xl mt-1.5">
                Core competencies organized by engineering domain, refined through building production systems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Domain 1: GenAI & AI Systems */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Cpu className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">GenAI & LLM Architecture</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "RAG Pipelines",
                    "Vector Search",
                    "LLM Integration",
                    "Prompt Engineering",
                    "Agentic Workflows",
                    "Gemini API",
                    "Evaluation Metrics"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 text-stone-300 border border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain 2: Backend Engineering */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Server className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">Backend & Distributed Systems</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Python",
                    "FastAPI",
                    "Flask",
                    "Go (Golang)",
                    "Node.js",
                    "Express.js",
                    "Celery",
                    "RabbitMQ",
                    "RESTful APIs",
                    "Async Concurrency"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 text-stone-300 border border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain 3: Machine Learning & Vision */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-4 text-orange-400">
                  <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <Brain className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">Machine Learning & CV</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "PyTorch",
                    "YOLOv8",
                    "Scikit-learn",
                    "XGBoost",
                    "SHAP Explainability",
                    "OpenCV",
                    "Streamlit",
                    "CUDA",
                    "Random Forest"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 text-stone-300 border border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain 4: Databases & Storage */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Database className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">Databases & Caching</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "PostgreSQL",
                    "MongoDB",
                    "Redis",
                    "SQLite",
                    "Schema Design",
                    "Query Optimization",
                    "Data Modeling"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 text-stone-300 border border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain 5: DevOps & Observability */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">Cloud & Observability</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Docker",
                    "Git & GitHub",
                    "Linux / Bash",
                    "Prometheus",
                    "Grafana",
                    "CI/CD Workflows",
                    "Cloudinary"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 text-stone-300 border border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Domain 6: Frontend & Full Stack */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800 hover:border-amber-500/40 transition-colors">
                <div className="flex items-center gap-2.5 mb-4 text-amber-400">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-100">Frontend & Full Stack</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Next.js (App Router)",
                    "React",
                    "TypeScript",
                    "JavaScript",
                    "Tailwind CSS",
                    "Radix UI",
                    "Clerk Auth",
                    "Recharts"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-stone-950 text-stone-300 border border-stone-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: ACHIEVEMENTS & ENGINEERING MILESTONES */}
        <section className="container mx-auto px-4 sm:px-6 py-16 border-t border-stone-800/70" id="achievements">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
                <Activity className="h-3.5 w-3.5" />
                KEY HIGHLIGHTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-stone-100 tracking-tight">
                Engineering Achievements
              </h2>
              <p className="text-stone-400 text-base max-w-2xl mt-1.5">
                Measurable engineering milestones and proven technical outcomes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Highlight 1 */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800/90 hover:border-amber-500/40 transition-colors">
                <div className="text-2xl font-mono font-extrabold text-amber-400 mb-2">
                  Async Queues
                </div>
                <div className="text-sm font-bold text-stone-200 mb-1.5">
                  Celery + RabbitMQ Pipelines
                </div>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Architected decoupled asynchronous workers with Redis caching and end-to-end metrics monitoring via Prometheus & Grafana in CodeMentor AI.
                </p>
              </div>

              {/* Highlight 2 */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800/90 hover:border-amber-500/40 transition-colors">
                <div className="text-2xl font-mono font-extrabold text-amber-400 mb-2">
                  89% Accuracy
                </div>
                <div className="text-sm font-bold text-stone-200 mb-1.5">
                  Trained ML Models
                </div>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Engineered healthcare anxiety classification (Random Forest, 89% accuracy) and computer vision damage identification trained on the CRDDC2022 dataset.
                </p>
              </div>

              {/* Highlight 3 */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800/90 hover:border-amber-500/40 transition-colors">
                <div className="text-2xl font-mono font-extrabold text-amber-400 mb-2">
                  Real-Time ML
                </div>
                <div className="text-sm font-bold text-stone-200 mb-1.5">
                  In-Memory XGBoost + SHAP
                </div>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Built SentinelAI with sub-millisecond in-memory inference pipelines, transparent SHAP explainability scoring, and single-trip SQL analytics.
                </p>
              </div>

              {/* Highlight 4 */}
              <div className="p-6 rounded-2xl bg-stone-900/50 border border-stone-800/90 hover:border-amber-500/40 transition-colors">
                <div className="text-2xl font-mono font-extrabold text-amber-400 mb-2">
                  DevHum Founder
                </div>
                <div className="text-sm font-bold text-stone-200 mb-1.5">
                  Technical Knowledge Platform
                </div>
                <p className="text-stone-400 text-xs leading-relaxed">
                  Creator and author at DevHum (devhum.vercel.app), publishing deep-dive analyses on software design, distributed backends, and AI engineering.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: CONTACT & RECRUITER CONNECT */}
        <section className="container mx-auto px-4 sm:px-6 py-20 border-t border-stone-800/70" id="contact">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
                <Mail className="h-3.5 w-3.5" />
                GET IN TOUCH
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-stone-100 tracking-tight">
                Let&apos;s Build Together
              </h2>
              <p className="text-stone-400 text-base sm:text-lg max-w-xl mx-auto mt-3">
                I am actively seeking Software Development Engineer (SDE), Backend Engineer, and GenAI Engineer roles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Direct Mail Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/80 to-stone-950 border border-stone-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2">Direct Channel</div>
                  <h3 className="text-xl font-bold text-stone-100 mb-2">guptatanishk8090@gmail.com</h3>
                  <p className="text-stone-400 text-xs sm:text-sm leading-relaxed mb-6">
                    Feel free to reach out directly regarding job opportunities, technical consulting, or architectural discussions.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Button
                    size="sm"
                    asChild
                    className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs h-9 px-4"
                  >
                    <a href="mailto:guptatanishk8090@gmail.com" className="flex items-center gap-1.5">
                      <Mail className="h-3.5 w-3.5" />
                      Send Email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyEmailToClipboard}
                    className="border-stone-700 bg-stone-900 text-stone-300 hover:text-amber-300 hover:border-amber-500/40 text-xs h-9 px-3"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 mr-1 text-emerald-400" />
                        Copied to Clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5 mr-1" />
                        Copy Email
                      </>
                    )}
                  </Button>
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-stone-900/80 to-stone-950 border border-stone-800 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-stone-500 mb-2">Professional Profiles</div>
                  <h3 className="text-xl font-bold text-stone-100 mb-4">Connect & Verify</h3>

                  <div className="space-y-2.5">
                    <a
                      href="https://github.com/tanishkgupta-18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/70 transition-all text-xs text-stone-300 hover:text-amber-300"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <Github className="h-4 w-4 text-stone-400" />
                        GitHub: @tanishkgupta-18
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>

                    <a
                      href="https://www.linkedin.com/in/tanishk-gupta18/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/70 transition-all text-xs text-stone-300 hover:text-amber-300"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <Linkedin className="h-4 w-4 text-stone-400" />
                        LinkedIn: /in/tanishk-gupta18
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>

                    <a
                      href="https://devhum.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/70 transition-all text-xs text-stone-300 hover:text-amber-300"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <BookOpen className="h-4 w-4 text-amber-400" />
                        DevHum Publication Platform
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>

                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-stone-950/70 border border-stone-800 hover:border-amber-500/40 hover:bg-stone-900/70 transition-all text-xs text-stone-300 hover:text-amber-300"
                    >
                      <span className="flex items-center gap-2 font-medium">
                        <FileText className="h-4 w-4 text-stone-400" />
                        Download Official Resume (PDF)
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-stone-800/80 bg-[#070605] py-10">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-6 h-6 rounded bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <Terminal className="h-3.5 w-3.5" />
              </div>
              <span className="text-xs font-mono text-stone-400">
                © {new Date().getFullYear()} Tanishk Gupta • SDE, Backend & GenAI Engineer
              </span>
            </div>

            <div className="flex items-center gap-6 text-xs text-stone-500">
              <a href="#featured" className="hover:text-stone-300 transition-colors">Featured</a>
              <a href="#projects" className="hover:text-stone-300 transition-colors">Projects</a>
              <a href="#writing" className="hover:text-stone-300 transition-colors">DevHum</a>
              <a href="#skills" className="hover:text-stone-300 transition-colors">Skills</a>
              <a href="#contact" className="hover:text-stone-300 transition-colors">Contact</a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/tanishkgupta-18"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2 rounded-lg text-stone-500 hover:text-amber-400 hover:bg-stone-900 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/tanishk-gupta18/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2 rounded-lg text-stone-500 hover:text-amber-400 hover:bg-stone-900 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:guptatanishk8090@gmail.com"
                aria-label="Send email"
                className="p-2 rounded-lg text-stone-500 hover:text-amber-400 hover:bg-stone-900 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
