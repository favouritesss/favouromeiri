"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Send,
  CheckCircle,
  Github,
  Linkedin,
  Twitter,
  X,
  Menu,
  MessageCircle,
  Star,
  Calendar,
  Code,
  Palette,
  Shield,
  FileText,
  Headphones,
  Phone,
  Mail,
  LocateIcon as Location,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Portfolio() {
  const [showServiceModal, setShowServiceModal] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    budget: "",
    message: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    timeline: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  // 🔧 Email delivery via Formspree
  const FORMSPREE_FORM_ID = "mqadgvan"

  const openWhatsApp = () => {
    window.open("https://wa.me/2349060474709", "_blank")
  }

  const downloadCV = () => {
    window.open("/path/to/cv.pdf", "_blank")
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: "New Project Inquiry from Portfolio",
          _template: "table",
        }),
      })

      if (res.ok) {
        setSubmitStatus("success")
        setFormData({
          budget: "",
          message: "",
          name: "",
          email: "",
          phone: "",
          company: "",
          projectType: "",
          timeline: "",
        })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus("idle"), 5000)
    }
  }

  const serviceDetails = {
    webDevelopment: {
      title: "Web Development",
      description: "Build high-performance, scalable web applications with modern technologies and best practices.",
      icon: Code,
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Backend Integration",
        "Performance Optimization",
        "Cross-browser Compatibility",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "TypeScript"],
    },
    cybersecurity: {
      title: "Cybersecurity",
      description: "Protect your digital assets from threats with comprehensive security solutions.",
      icon: Shield,
      features: [
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits",
        "Risk Analysis",
        "Compliance Consulting",
      ],
      technologies: ["Nmap", "Metasploit", "Python", "Wireshark", "Burp Suite"],
    },
    uiUxDesign: {
      title: "UI/UX Design",
      description: "Create intuitive and visually appealing user interfaces that enhance user experience.",
      icon: Palette,
      features: ["User Research", "Wireframing", "Prototyping", "User Testing", "Design Systems"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Principle"],
    },
    businessWriting: {
      title: "Business Writing",
      description: "Craft compelling business documents and content that drive results.",
      icon: FileText,
      features: ["Cv Compilation and Resume", "Proposal Development", "Content Strategy", "Copywriting", "Grant Writing"],
      technologies: ["Microsoft Word", "Google Docs", "Notion", "Grammarly", "Hemingway"],
    },
    virtualAssistant: {
      title: "Virtual Assistant",
      description: "Manage your daily tasks efficiently with professional virtual assistance.",
      icon: Headphones,
      features: ["Email Management", "Calendar Scheduling", "Data Entry", "Research Tasks", "Customer Support"],
      technologies: ["Google Workspace", "Microsoft 365", "Slack", "Trello", "Asana"],
    },
  }

  const projectDetails = {
    ecommercePlatform: {
      title: "E-commerce Platform",
      description:
        "A full-stack e-commerce solution with advanced features including inventory management, payment processing, and analytics dashboard.",
      duration: "3 weeks",
      client: "TechMart Nigeria",
      category: "Web Development",
      image: "/modern-ecommerce-dashboard.png",
      features: [
        "Multi-vendor Support",
        "Real-time Inventory",
        "Payment Gateway Integration",
        "Analytics Dashboard",
        "Mobile App",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    },
    cybersecurityDashboard: {
      title: "Cybersecurity Dashboard",
      description:
        "Real-time security monitoring dashboard for enterprise clients with threat detection and incident response capabilities.",
      duration: "3 weeks",
      client: "SecureNet Solutions",
      category: "Web Development",
      image: "/cybersecurity-dashboard-with-charts-and-alerts.jpg",
      features: [
        "Threat Detection",
        "Real-time Monitoring",
        "Incident Response",
        "Compliance Reporting",
        "Risk Assessment",
      ],
      technologies: ["Python", "Django", "PostgreSQL", "Redis", "Docker"],
    },
    brandIdentity: {
      title: "Brand Identity Design",
      description:
        "Complete brand identity package including logo design, brand guidelines, and marketing materials for a fintech startup.",
      duration: "2 months",
      client: "PayFlow Africa",
      category: "UI/UX Design",
      image: "/modern-brand-identity-design-mockup.jpg",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Website Design", "Social Media Kit"],
      technologies: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign", "After Effects"],
    },
    mobileApp: {
      title: "Mobile Banking App",
      description:
        "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
      duration: "5 weeks",
      client: "FirstBank Digital",
      category: "UI/UX Design",
      image: "/mobile-banking-app.png",
      features: [
        "Biometric Auth",
        "Real-time Transactions",
        "Bill Payments",
        "Investment Tracking",
        "Customer Support",
      ],
      technologies: ["React Native", "Firebase", "Node.js", "PostgreSQL", "AWS"],
    },
    corporateWebsite: {
      title: "Corporate Website",
      description: "Modern corporate website with CMS integration, SEO optimization, and multi-language support.",
      duration: "3 weeks",
      client: "Global Logistics Ltd",
      category: "Web Development",
      image: "/corporate-homepage.png",
      features: ["CMS Integration", "SEO Optimization", "Multi-language", "Contact Forms", "Blog System"],
      technologies: ["Next.js", "Strapi", "PostgreSQL", "Vercel", "Cloudinary"],
    },
    analyticsPortal: {
      title: "Data Analytics Portal",
      description: "Business intelligence dashboard with advanced data visualization and reporting capabilities.",
      duration: "2 weeks",
      client: "DataInsight Pro",
      category: "Web Development",
      image: "/data-analytics-dashboard.png",
      features: ["Data Visualization", "Custom Reports", "Real-time Analytics", "Export Functions", "User Management"],
      technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    },
    restaurantApp: {
      title: "Restaurant Management App",
      description:
        "Complete restaurant management system with order tracking, inventory management, and customer analytics.",
      duration: "3 weeks",
      client: "FoodHub Lagos",
      category: "Web Development",
      image: "/restaurant-management-dashboard.jpg",
      features: [
        "Order Management",
        "Inventory Tracking",
        "Staff Management",
        "Customer Analytics",
        "Payment Processing",
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
    },
    fitnessApp: {
      title: "Fitness Tracking App",
      description: "Mobile fitness application with workout planning, progress tracking, and social features.",
      duration: "2 weeks",
      client: "FitLife Nigeria",
      category: "UI/UX Design",
      image: "/fitness-app-interface.jpg",
      features: ["Workout Planning", "Progress Tracking", "Social Features", "Nutrition Guide", "Personal Trainer"],
      technologies: ["React Native", "Firebase", "Redux", "Expo", "Stripe"],
    },
    educationPlatform: {
      title: "Online Learning Platform",
      description: "Comprehensive e-learning platform with video streaming, assessments, and progress tracking.",
      duration: "4 weeks",
      client: "EduTech Africa",
      category: "Web Development",
      image: "/online-learning-platform.jpg",
      features: ["Video Streaming", "Interactive Quizzes", "Progress Tracking", "Certificates", "Discussion Forums"],
      technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS S3", "WebRTC"],
    },
    travelApp: {
      title: "Travel Booking Interface",
      description: "Modern travel booking application with intuitive search, booking flow, and trip management.",
      duration: "4 weeks",
      client: "WanderWise Travel",
      category: "UI/UX Design",
      image: "/travel-booking-interface.jpg",
      features: ["Flight Search", "Hotel Booking", "Trip Planning", "Price Alerts", "Travel Guides"],
      technologies: ["Figma", "Adobe XD", "Principle", "InVision", "Sketch"],
    },
  }

  const skills = [
    { name: "PHP", level: 90, category: "Backend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "Python", level: 88, category: "Backend" },
    { name: "HTML", level: 92, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "Bootstrap", level: 85, category: "Frontend" },
    { name: "SQL", level: 87, category: "Database" },
    { name: "JavaScript", level: 93, category: "Frontend" },
    { name: "Cyber Security", level: 82, category: "Security" },
  ]

  const testimonials = [
    {
      name: "Adebayo Johnson",
      role: "CEO, TechMart Nigeria",
      content:
        "Favour delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.",
      rating: 5,
      image: "/professional-african-businessman.png",
    },
    {
      name: "Sarah Williams",
      role: "CTO, SecureNet Solutions",
      content:
        "The cybersecurity dashboard Favour built has significantly improved our threat detection capabilities. Highly recommended!",
      rating: 5,
      image: "/professional-african-businesswoman.png",
    },
    {
      name: "Michael Chen",
      role: "Product Manager, PayFlow Africa",
      content:
        "Working with Favour on our brand identity was a game-changer. The designs perfectly captured our vision and values.",
      rating: 5,
      image: "/professional-asian-businessman.jpg",
    },
  ]

  const experience = [
    {
      year: "2024",
      title: "Senior Full-Stack Developer",
      company: "Freelance",
      description: "Leading complex web development projects and cybersecurity consulting for enterprise clients.",
    },
    {
      year: "2023",
      title: "Full-Stack Developer",
      company: "TechHub Lagos",
      description: "Developed scalable web applications and implemented security best practices for fintech clients.",
    },
    {
      year: "2022",
      title: "Frontend Developer",
      company: "Digital Solutions Ltd",
      description: "Created responsive web interfaces and improved user experience for various client projects.",
    },
    {
      year: "2021",
      title: "Junior Developer",
      company: "StartupLab",
      description: "Built foundational skills in web development and contributed to multiple startup projects.",
    },
  ]

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "I offer comprehensive web development, cybersecurity consulting, UI/UX design, business writing, and virtual assistant services. Each service is tailored to meet your specific business needs.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I provide detailed timelines during our initial consultation.",
    },
    {
      question: "What is your pricing structure?",
      answer:
        "Pricing depends on project scope, complexity, and timeline. I offer competitive rates starting from ₦50,000 for basic projects. Contact me for a detailed quote based on your specific requirements.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, I offer ongoing support and maintenance packages to ensure your project continues to perform optimally. This includes updates, security patches, and technical support.",
    },
    {
      question: "Can you work with international clients?",
      answer:
        "I work with clients globally and am experienced in remote collaboration. I'm available across different time zones and use modern communication tools for seamless project management.",
    },
    {
      question: "What makes your cybersecurity services unique?",
      answer:
        "My cybersecurity approach combines technical expertise with business understanding. I provide comprehensive assessments, practical recommendations, and ongoing monitoring to protect your digital assets effectively.",
    },
  ]

  const [showProjectModal, setShowProjectModal] = useState<string | null>(null)
  const [projectFilter, setProjectFilter] = useState<string>("all")

  return (
    <div className="bg-background min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-primary py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">FT</span>
              </div>
              <span className="font-bold text-xl text-foreground">FAVTECH</span>
            </div>

            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#services" className="text-foreground hover:text-primary-foreground transition-colors">
                Services
              </a>
              <a href="#portfolio" className="text-foreground hover:text-primary-foreground transition-colors">
                Portfolio
              </a>
              <a href="#skills" className="text-foreground hover:text-primary-foreground transition-colors">
                Skills
              </a>
              <a href="#experience" className="text-foreground hover:text-primary-foreground transition-colors">
                Experience
              </a>
              <a href="#testimonials" className="text-foreground hover:text-primary-foreground transition-colors">
                Testimonials
              </a>
              <a href="#faq" className="text-foreground hover:text-primary-foreground transition-colors">
                FAQ
              </a>
              <a href="#contact" className="text-foreground hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </nav>

            <div className="flex items-center gap-2">
              <Button
                size="icon"
                variant="outline"
                className="lg:hidden hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-background border-b border-border py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex flex-col space-y-2">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </a>
              <a
                href="#skills"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#experience"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#testimonials"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
          <section className="relative overflow-hidden rounded-3xl">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/modern-tech-office-workspace-with-developers-codin.jpg')" }}
            />
            <div className="relative bg-gradient-to-r from-primary/90 to-primary/70 py-20 px-8 text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Building Digital Excellence
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Full-stack developer and cybersecurity expert delivering innovative solutions for modern businesses
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  onClick={downloadCV}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">My Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive technology solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(serviceDetails).map(([key, service]) => {
                const IconComponent = service.icon
                return (
                  <Card
                    key={key}
                    className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setShowServiceModal(key)}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="h-6 w-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.slice(0, 3).map((tech, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Button
                          variant="link"
                          className="px-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            setShowServiceModal(key)
                          }}
                        >
                          Learn More →
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
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
                  variant={projectFilter === "all" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setProjectFilter("all")}
                  className="rounded-md"
                >
                  All Projects
                </Button>
                <Button
                  variant={projectFilter === "Web Development" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setProjectFilter("Web Development")}
                  className="rounded-md"
                >
                  Web Development
                </Button>
                <Button
                  variant={projectFilter === "UI/UX Design" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setProjectFilter("UI/UX Design")}
                  className="rounded-md"
                >
                  UI/UX Design
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(projectDetails)
                .filter(([_, project]) => projectFilter === "all" || project.category === projectFilter)
                .map(([key, project]) => (
                  <Card
                    key={key}
                    className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => setShowProjectModal(key)}
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
                        <span className="text-sm text-muted-foreground">{project.client}</span>
                        <Badge variant="outline">{project.duration}</Badge>
                      </div>
                      <div className="mt-4">
                        <Button
                          variant="link"
                          className="px-0"
                          onClick={(e) => {
                            e.stopPropagation()
                            setShowProjectModal(key)
                          }}
                        >
                          View Details →
                        </Button>
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
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">{skill.category}</span>
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
                      <Card className="p-6">
                        <CardContent className="p-0">
                          <div className="flex items-center mb-2">
                            <Calendar className="h-4 w-4 text-primary mr-2" />
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
                <Card key={index} className="p-6">
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
                  <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
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
                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Get in Touch</h3>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Phone</p>
                          <p className="text-sm text-muted-foreground">+234 906 047 4709</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Email</p>
                          <p className="text-sm text-muted-foreground">favouromeiri5@gmail.com</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Location className="h-5 w-5 text-primary mr-3" />
                        <div>
                          <p className="font-medium text-foreground">Location</p>
                          <p className="text-sm text-muted-foreground">Nigeria</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold text-card-foreground mb-4">Social Links</h3>
                    <div className="flex gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                        onClick={() => window.open("https://www.linkedin.com/in/omeiri-favour-620a582a6/", "_blank")}
                        aria-label="Open LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                        onClick={() => window.open("https://github.com/favouritesss", "_blank")}
                        aria-label="Open GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button
                        size="icon"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                        onClick={() => window.open("https://x.com/that_tech_bee?s=21", "_blank")}
                        aria-label="Open Twitter"
                      >
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-6 lg:p-8">
                  <CardContent className="p-0">
                    {submitStatus === "success" && (
                      <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <div className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <p className="text-green-800">Message sent successfully! I'll get back to you soon.</p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <div className="flex items-center">
                          <X className="h-5 w-5 text-red-600 mr-2" />
                          <p className="text-red-800">Failed to send message. Please try again or contact me directly.</p>
                        </div>
                      </div>
                    )}

                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Name *</label>
                          <Input
                            type="text"
                            placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            required
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                          <Input
                            type="tel"
                            placeholder="+234 xxx xxx xxxx"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                          <Input
                            type="text"
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="bg-background"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">Project Type *</label>
                          <Select
                            value={formData.projectType}
                            onValueChange={(value) => setFormData({ ...formData, projectType: value })}
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
                        <label className="block text-sm font-medium text-foreground mb-2">Budget Range (NGN) *</label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => setFormData({ ...formData, budget: value })}
                        >
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
                        <label className="block text-sm font-medium text-foreground mb-2">Project Details *</label>
                        <Textarea
                          placeholder="Tell me about your project requirements, goals, timeline, and any specific features you need..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
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
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
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
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
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
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cybersecurity
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Business Writing
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Virtual Assistant
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
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
                  className="text-muted-foreground hover:text-foreground"
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

      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          onClick={openWhatsApp}
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-xl lg:text-2xl font-bold text-card-foreground">
                  {serviceDetails[showServiceModal as keyof typeof serviceDetails]?.title}
                </h3>
                <Button variant="ghost" size="sm" onClick={() => setShowServiceModal(null)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <p className="text-muted-foreground mb-6">
                {serviceDetails[showServiceModal as keyof typeof serviceDetails]?.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-semibold text-card-foreground mb-3">Key Features:</h4>
                  <div className="grid gap-2">
                    {serviceDetails[showServiceModal as keyof typeof serviceDetails]?.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-card-foreground mb-3">Technologies & Tools:</h4>
                  <div className="flex flex-wrap gap-2">
                    {serviceDetails[showServiceModal as keyof typeof serviceDetails]?.technologies.map(
                      (tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  className="flex-1"
                  onClick={() => {
                    setShowServiceModal(null)
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Get Started
                </Button>
                <Button variant="outline" onClick={openWhatsApp}>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Chat on WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {showProjectModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  {projectDetails[showProjectModal as keyof typeof projectDetails]?.title}
                </h2>
                <Button variant="ghost" size="icon" onClick={() => setShowProjectModal(null)}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img
                    src={projectDetails[showProjectModal as keyof typeof projectDetails]?.image || "/placeholder.svg"}
                    alt={projectDetails[showProjectModal as keyof typeof projectDetails]?.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    {projectDetails[showProjectModal as keyof typeof projectDetails]?.description}
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Duration:</h3>
                      <p className="text-muted-foreground">
                        {projectDetails[showProjectModal as keyof typeof projectDetails]?.duration}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Client:</h3>
                      <p className="text-muted-foreground">
                        {projectDetails[showProjectModal as keyof typeof projectDetails]?.client}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Key Features:</h3>
                  <div className="grid md:grid-cols-2 gap-2">
                    {projectDetails[showProjectModal as keyof typeof projectDetails]?.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-foreground mb-3">Technologies:</h3>
                  <div className="flex flex-wrap gap-2">
                    {projectDetails[showProjectModal as keyof typeof projectDetails]?.technologies.map(
                      (tech, index) => (
                        <Badge key={index} variant="outline">
                          {tech}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90"
                    onClick={() => {
                      setShowProjectModal(null)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    Start Similar Project
                  </Button>
                  <Button variant="outline" className="bg-transparent" onClick={openWhatsApp}>
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Discuss Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
