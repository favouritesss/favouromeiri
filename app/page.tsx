"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Progress } from "@/components/ui/progress"

const Menu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const X = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)

const Palette = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2"
    />
  </svg>
)

const Shield = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
)

const PenTool = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
    />
  </svg>
)

const Headphones = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>
)

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
)

const Github = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
)

const ExternalLink = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
)

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const Phone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
    />
  </svg>
)

const Location = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const Send = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
)

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const Loader2 = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
    />
  </svg>
)

const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
)

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

const Sun = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
)

const Moon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
)

const GraduationCap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    />
  </svg>
)

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const Rocket = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
)

const Smartphone = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"
    />
  </svg>
)

const Database = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
)

const Cloud = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
)

const Lock = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
)

const Cpu = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
    />
  </svg>
)

const Wifi = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
    />
  </svg>
)

const Monitor = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
    budget: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [file, setFile] = useState<File | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), { threshold: 0.1 })

    window.addEventListener("scroll", handleScroll)
    const heroElement = document.querySelector("#hero")
    if (heroElement) observer.observe(heroElement)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const downloadCV = () => {
    // Create a temporary link to download CV
    const link = document.createElement("a")
    link.href = "/cv.pdf" // You'll need to add your CV file to the public folder
    link.download = "Omeiri_Favour_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'm interested in your services. Let's discuss my project.")
    window.open(`https://wa.me/2349060474709?text=${message}`, "_blank")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        timeline: "",
        budget: "",
        message: "",
      })
      setFile(null)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Full-stack web applications using modern technologies like React, Next.js, and Node.js.",
      features: ["Responsive Design", "Performance Optimization", "SEO Friendly", "Modern Frameworks"],
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive digital experiences.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      features: ["Security Audits", "Penetration Testing", "Risk Assessment", "Compliance"],
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Business Writing",
      description: "Professional content creation for proposals, documentation, and marketing materials.",
      features: ["Technical Writing", "Proposals", "Documentation", "Content Strategy"],
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Virtual Assistant",
      description: "Administrative support and project management to streamline your business operations.",
      features: ["Project Management", "Research", "Data Entry", "Customer Support"],
    },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern admin dashboard for e-commerce management with real-time analytics and inventory tracking.",
      image: "/modern-ecommerce-dashboard.png",
      category: "Web Development",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Cybersecurity Dashboard",
      description:
        "Comprehensive security monitoring dashboard with threat detection and incident response capabilities.",
      image: "/cybersecurity-dashboard-with-charts-and-alerts.jpg",
      category: "Cybersecurity",
      technologies: ["Python", "Django", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      description: "Complete brand identity package including logo design, color palette, and brand guidelines.",
      image: "/modern-brand-identity-design-mockup.jpg",
      category: "UI/UX Design",
      technologies: ["Figma", "Adobe Illustrator", "Photoshop"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "Secure and intuitive mobile banking application with biometric authentication and real-time transactions.",
      image: "/mobile-banking-app.png",
      category: "UI/UX Design",
      technologies: ["React Native", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Corporate Website",
      description: "Professional corporate website with CMS integration and SEO optimization for maximum visibility.",
      image: "/corporate-homepage.png",
      category: "Web Development",
      technologies: ["Next.js", "Sanity CMS", "Vercel", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Data Analytics Platform",
      description:
        "Advanced analytics platform for business intelligence with interactive charts and reporting features.",
      image: "/data-analytics-dashboard.png",
      category: "Web Development",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 7,
      title: "Restaurant Management System",
      description:
        "Complete restaurant management solution with POS integration, inventory tracking, and staff management.",
      image: "/restaurant-management-dashboard.jpg",
      category: "Web Development",
      technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 8,
      title: "Fitness App Interface",
      description: "Modern fitness tracking app with workout plans, progress monitoring, and social features.",
      image: "/fitness-app-interface.jpg",
      category: "UI/UX Design",
      technologies: ["Flutter", "Firebase", "Figma", "Adobe XD"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 9,
      title: "Online Learning Platform",
      description:
        "Comprehensive e-learning platform with video streaming, progress tracking, and interactive quizzes.",
      image: "/online-learning-platform.jpg",
      category: "Web Development",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 10,
      title: "Travel Booking Interface",
      description: "Intuitive travel booking platform with advanced search filters and seamless payment integration.",
      image: "/travel-booking-interface.jpg",
      category: "UI/UX Design",
      technologies: ["React", "Redux", "Stripe", "Google Maps API"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) =>
          activeFilter === "web"
            ? project.category === "Web Development"
            : activeFilter === "design"
              ? project.category === "UI/UX Design"
              : project.category === activeFilter,
        )

  const skills = [
    { name: "Frontend Development", level: 95, icon: <Monitor className="h-5 w-5" /> },
    { name: "Backend Development", level: 90, icon: <Database className="h-5 w-5" /> },
    { name: "UI/UX Design", level: 85, icon: <Palette className="h-5 w-5" /> },
    { name: "Mobile Development", level: 80, icon: <Smartphone className="h-5 w-5" /> },
    { name: "Cloud Services", level: 85, icon: <Cloud className="h-5 w-5" /> },
    { name: "Cybersecurity", level: 88, icon: <Lock className="h-5 w-5" /> },
    { name: "DevOps", level: 75, icon: <Cpu className="h-5 w-5" /> },
    { name: "API Development", level: 92, icon: <Wifi className="h-5 w-5" /> },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content:
        "Favour delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.",
      rating: 5,
      image: "/professional-african-businesswoman.png",
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Solutions",
      content:
        "Working with Favour was a game-changer for our cybersecurity infrastructure. Professional, reliable, and incredibly skilled.",
      rating: 5,
      image: "/professional-asian-businessman.jpg",
    },
    {
      name: "David Okafor",
      role: "Founder, NigeriaFintech",
      content:
        "The mobile app design Favour created for us resulted in a 40% increase in user engagement. Highly recommended!",
      rating: 5,
      image: "/professional-african-businessman.png",
    },
  ]

  const experience = [
    {
      year: "2023 - Present",
      title: "Senior Full Stack Developer",
      company: "Freelance",
      description:
        "Leading complex web development projects and mentoring junior developers while delivering high-quality solutions for international clients.",
      icon: <Rocket className="h-5 w-5" />,
    },
    {
      year: "2021 - 2023",
      title: "Full Stack Developer",
      company: "TechCorp Nigeria",
      description:
        "Developed and maintained multiple web applications using React, Node.js, and cloud technologies, serving over 10,000 users.",
      icon: <Code className="h-5 w-5" />,
    },
    {
      year: "2020 - 2021",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      description:
        "Specialized in creating responsive and accessible user interfaces with modern JavaScript frameworks and design systems.",
      icon: <Monitor className="h-5 w-5" />,
    },
    {
      year: "2019 - 2020",
      title: "Junior Developer",
      company: "StartupHub Lagos",
      description:
        "Started my professional journey building websites and learning full-stack development in a fast-paced startup environment.",
      icon: <GraduationCap className="h-5 w-5" />,
    },
  ]

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer comprehensive web development, UI/UX design, cybersecurity consulting, business writing, and virtual assistant services. Each service is tailored to meet your specific business needs and objectives.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex web application could take 2-3 months. I provide detailed timelines during our initial consultation.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! I work with clients globally and am experienced in remote collaboration. I'm available across different time zones and use modern communication tools to ensure smooth project delivery.",
    },
    {
      question: "What is your development process?",
      answer:
        "My process includes: 1) Discovery and planning, 2) Design and prototyping, 3) Development and testing, 4) Review and feedback, 5) Launch and support. I keep you involved at every step.",
    },
    {
      question: "Do you provide ongoing support?",
      answer:
        "I offer various support packages including bug fixes, updates, security monitoring, and feature enhancements. Support terms are discussed during project planning.",
    },
    {
      question: "What technologies do you specialize in?",
      answer:
        "I specialize in React, Next.js, Node.js, TypeScript, Python, and modern cloud technologies. I stay updated with the latest trends and choose the best tech stack for each project.",
    },
    {
      question: "How do you handle project communication?",
      answer:
        "I use a combination of email, WhatsApp, video calls, and project management tools. You'll receive regular updates and have direct access to me throughout the project lifecycle.",
    },
    {
      question: "Can you help with existing projects?",
      answer:
        "Yes! I can help improve, debug, or add features to existing projects. I'll first analyze your current setup and provide recommendations for the best path forward.",
    },
  ]

  return (
    <div className={`min-h-screen transition-all duration-500 ${isDarkMode ? "dark" : ""}`}>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 group cursor-pointer transform transition-transform duration-300 hover:scale-105">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">FT</span>
              </div>
              <span className="font-bold text-xl text-foreground">FAVTECH</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-105 font-medium"
              >
                Contact
              </button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary/10 transition-all duration-300 hover:scale-110"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button and theme toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="hover:bg-primary/10 transition-all duration-300"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
          >
            <div className="py-4 space-y-3 border-t border-border">
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-lg transition-all duration-300"
              >
                Contact
              </button>
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/modern-tech-office-workspace-with-developers-codin.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-primary/5 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/15 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-primary/8 rounded-full animate-bounce delay-1500"></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6 animate-fade-in">
              <Zap className="h-4 w-4 mr-2" />
              Available for new projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent animate-gradient">
                Omeiri Favour
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl text-muted-foreground font-normal">
                Full Stack Developer & Designer
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              I craft exceptional digital experiences through innovative web development, stunning UI/UX design, and
              robust cybersecurity solutions. Let's build something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                onClick={() => scrollToSection("portfolio")}
                className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transform transition-all duration-300 hover:scale-105 shadow-xl text-lg px-8 py-3"
              >
                <Rocket className="h-5 w-5 mr-2" />
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 hover:bg-primary hover:text-primary-foreground transform transition-all duration-300 hover:scale-105 text-lg px-8 py-3"
              >
                <Mail className="h-5 w-5 mr-2" />
                Let's Talk
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                  30+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                  4+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          {/* Services Section */}
          <section id="services" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">My Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Portfolio Section */}
          <section id="portfolio" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A showcase of successful projects delivered for clients across various industries
              </p>
            </div>

            <div className="flex justify-center mb-8">
              <div className="flex flex-wrap gap-2 bg-muted p-1 rounded-lg">
                <Button
                  variant={activeFilter === "all" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter("all")}
                  className="rounded-md"
                >
                  All Projects
                </Button>
                <Button
                  variant={activeFilter === "web" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter("web")}
                  className="rounded-md"
                >
                  Web Development
                </Button>
                <Button
                  variant={activeFilter === "design" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter("design")}
                  className="rounded-md"
                >
                  UI/UX Design
                </Button>
                <Button
                  variant={activeFilter === "cybersecurity" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActiveFilter("cybersecurity")}
                  className="rounded-md"
                >
                  Cybersecurity
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-card-foreground">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {project.technologies?.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors mr-4"
                        >
                          Live Demo <ExternalLink className="h-4 w-4 inline-block ml-1" />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          GitHub <Github className="h-4 w-4 inline-block ml-1" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technical proficiencies and tools I use to deliver exceptional results
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 rounded-full" />
                  <div className="flex items-center space-x-2">
                    {skill.icon}
                    <span className="text-xs text-muted-foreground">Category</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience Timeline */}
          <section id="experience" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Professional Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                My career progression and key milestones in technology
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="relative flex items-center">
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                    <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-1/2 md:pr-8" : "md:ml-1/2 md:pl-8"}`}>
                      <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <CardContent className="p-0">
                          <div className="flex items-center mb-2">
                            {exp.icon}
                            <span className="text-sm font-medium text-primary">{exp.year}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground mb-1">{exp.title}</h3>
                          <p className="text-muted-foreground mb-2">{exp.company}</p>
                          <p className="text-sm text-muted-foreground">{exp.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section id="testimonials" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Client Testimonials</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">What clients say about working with me</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-0">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <p className="font-medium text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Common questions about my services and working process
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-border rounded-lg px-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>

          {/* Contact Form */}
          <section id="contact" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Ready to start your project? Get in touch and let's discuss how I can help bring your ideas to life.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center group">
                        <Phone className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <p className="text-sm text-muted-foreground">+234 906 047 4709</p>
                        </div>
                      </div>
                      <div className="flex items-center group">
                        <Mail className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-sm text-muted-foreground">favouromeiri5@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center group">
                        <Location className="h-5 w-5 text-primary mr-3 group-hover:scale-110 transition-transform duration-300" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Social Links</h3>
                    <div className="flex gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                        onClick={() => window.open("https://www.linkedin.com/in/omeiri-favour-620a582a6/", "_blank")}
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                        onClick={() => window.open("https://github.com/favouritesss", "_blank")}
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                        onClick={() => window.open("https://x.com/that_tech_bee?s=21", "_blank")}
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-6 lg:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <CardContent className="p-0">
                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <p className="text-green-800 dark:text-green-200">
                            Message sent successfully! I'll get back to you soon.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                        <div className="flex items-center">
                          <X className="h-5 w-5 text-red-600 mr-2" />
                          <p className="text-red-800 dark:text-red-200">
                            Failed to send message. Please try again or contact me directly.
                          </p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                            Name *
                          </Label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </Label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                            Phone
                          </Label>
                          <Input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="+234 xxx xxx xxxx"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <Label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                            Company
                          </Label>
                          <Input
                            type="text"
                            id="company"
                            name="company"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">
                            Project Type *
                          </Label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => handleSelectChange("projectType", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="web-development">Web Development</SelectItem>
                              <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                              <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                              <SelectItem value="business-writing">Business Writing</SelectItem>
                              <SelectItem value="virtual-assistant">Virtual Assistant</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="timeline" className="block text-sm font-medium text-foreground mb-2">
                            Timeline
                          </Label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) => handleSelectChange("timeline", value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Project timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="asap">ASAP</SelectItem>
                              <SelectItem value="1-2-weeks">1-2 weeks</SelectItem>
                              <SelectItem value="1-month">1 month</SelectItem>
                              <SelectItem value="2-3-months">2-3 months</SelectItem>
                              <SelectItem value="3-6-months">3-6 months</SelectItem>
                              <SelectItem value="flexible">Flexible</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">
                          Budget Range (NGN) *
                        </Label>
                        <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="50000-200000">₦50,000 - ₦200,000</SelectItem>
                            <SelectItem value="200000-500000">₦200,000 - ₦500,000</SelectItem>
                            <SelectItem value="500000-1000000">₦500,000 - ₦1,000,000</SelectItem>
                            <SelectItem value="1000000+">₦1,000,000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                          Project Details *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your project requirements, goals, timeline, and any specific features you need..."
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="bg-background"
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-muted py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-bold text-sm">FT</span>
                </div>
                <span className="font-bold text-xl text-foreground">FAVTECH</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Your trusted partner for comprehensive technology solutions. From web development to cybersecurity, we
                deliver excellence in every project.
              </p>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                  onClick={() => window.open("https://www.linkedin.com/in/omeiri-favour-620a582a6/", "_blank")}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                  onClick={() => window.open("https://github.com/favouritesss", "_blank")}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground bg-transparent transform transition-all duration-300 hover:scale-110 hover:rotate-6"
                  onClick={() => window.open("https://x.com/that_tech_bee?s=21", "_blank")}
                >
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Web Development
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Cybersecurity
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    UI/UX Design
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Business Writing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Virtual Assistant
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Portfolio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={downloadCV}
                    className="text-muted-foreground hover:text-foreground transition-colors text-left"
                  >
                    Download CV
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-6 lg:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 FAVTECH. All rights reserved. Built with ❤️ by Omeiri Favour.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>Made in Nigeria 🇳🇬</span>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground hover:text-foreground transform transition-all duration-300 hover:scale-105"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
