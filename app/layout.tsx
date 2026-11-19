import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#090807",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Tanishk Gupta | SDE • Backend & GenAI Engineer",
  description:
    "Portfolio of Tanishk Gupta — Software Development Engineer specializing in distributed backend systems, GenAI architectures, and high-performance applications.",
  keywords: [
    "Tanishk Gupta",
    "Software Development Engineer",
    "SDE",
    "Backend Engineer",
    "GenAI Engineer",
    "FastAPI",
    "Python",
    "Go",
    "Next.js",
    "RAG",
    "LLM",
    "Distributed Systems",
    "Machine Learning",
    "DevHum",
  ],
  authors: [{ name: "Tanishk Gupta", url: "https://devhum.vercel.app/" }],
  creator: "Tanishk Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Tanishk Gupta | SDE • Backend & GenAI Engineer",
    description:
      "Software Development Engineer building high-throughput backend services, autonomous LLM agents, and robust machine learning pipelines.",
    siteName: "Tanishk Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tanishk Gupta | SDE • Backend & GenAI Engineer",
    description:
      "Software Development Engineer building high-throughput backend services, autonomous LLM agents, and robust machine learning pipelines.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="antialiased selection:bg-amber-500/25 selection:text-amber-200 bg-[#090807] text-stone-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
