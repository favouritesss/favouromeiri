"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Portfolio() {
    const [filter, setFilter] = useState("All")

    const projects = [
        {
            title: "Luxe Lips",
            category: "E-commerce",
            description: "A premium beauty and cosmetics e-commerce platform with elegant design and seamless checkout.",
            tech: ["React", "Netlify", "Stripe"],
            image: "/Screenshot 2026-01-14 190626.png",
            link: "https://luxe-lips.netlify.app/",
            github: "#"
        },
        {
            title: "DC Mart Surf",
            category: "E-commerce",
            description: "Online marketplace for surf and beach gear featuring dynamic product filtering.",
            tech: ["React", "Netlify", "Tailwind"],
            image: "/Screenshot 2026-01-14 190725.png",
            link: "https://dcmartsurf.netlify.app/",
            github: "#"
        },
        {
            title: "Resident Kitchen",
            category: "Web Development",
            description: "Modern landing page for a premier kitchen design and renovation service.",
            tech: ["Next.js", "Vercel", "CSS Modules"],
            image: "/screenshot-1768435314897.png",
            link: "https://resident-kitchen-premier.vercel.app/",
            github: "#"
        },
        {
            title: "Gilded Aura",
            category: "Design",
            description: "Luxury jewelry brand showcase with immersive visual storytelling.",
            tech: ["Next.js", "Vercel", "Framer Motion"],
            image: "/screenshot-1768435350362.png",
            link: "https://gilded-aura.vercel.app/",
            github: "#"
        },
        {
            title: "Deluxe Style Hub",
            category: "Web Development",
            description: "Fashion and lifestyle hub connecting trends with modern aesthetic.",
            tech: ["Next.js", "Vercel"],
            image: "/screenshot-1768435374741.png",
            link: "https://deluxe-style-hub-c1e81e69.vercel.app/",
            github: "#"
        },
        {
            title: "Delightful Tapioca",
            category: "Web Development",
            description: "Creative food service platform with interactive menu and ordering system.",
            tech: ["React", "Netlify"],
            image: "/screenshot-1768435411415.png",
            link: "https://delightful-tapioca-2a58ab.netlify.app/",
            github: "#"
        },
        {
            title: "E-commerce Platform",
            category: "Web Development",
            description: "A full-stack e-commerce solution with inventory management, payment processing, and analytics.",
            tech: ["React", "Node.js", "Stripe"],
            image: "/modern-ecommerce-dashboard.png",
            link: "#",
            github: "#"
        },
        {
            title: "Cybersecurity Dashboard",
            category: "Web Development",
            description: "Real-time security monitoring dashboard for enterprise clients with threat detection.",
            tech: ["Python", "Django", "D3.js"],
            image: "/cybersecurity-dashboard-with-charts-and-alerts.png",
            link: "#",
            github: "#"
        },
        {
            title: "Brand Identity Design",
            category: "Design",
            description: "Complete brand package including logo, guidelines, and marketing materials for a fintech.",
            tech: ["Photoshop", "Illustrator", "Figma"],
            image: "/modern-brand-identity-design-mockup.png",
            link: "#",
            github: null
        },
        {
            title: "Mobile Banking App",
            category: "UI/UX",
            description: "Secure mobile banking app design with biometric auth flow and transaction monitoring.",
            tech: ["Figma", "React Native"],
            image: "/mobile-banking-app.png",
            link: "#",
            github: "#"
        },
        {
            title: "Corporate Website",
            category: "Web Development",
            description: "Modern corporate website with CMS integration and SEO optimization.",
            tech: ["Next.js", "Strapi", "Tailwind"],
            image: "/corporate-homepage.png",
            link: "#",
            github: "#"
        },
        {
            title: "Analytics Portal",
            category: "Web Development",
            description: "Business intelligence dashboard with advanced data visualization.",
            tech: ["React", "Python", "PostgreSQL"],
            image: "/data-analytics-dashboard.png",
            link: "#",
            github: "#"
        }
    ]

    const categories = ["All", "Web Development", "Design", "UI/UX"]

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category.includes(filter) || (filter === "Web Development" && p.category === "Web Development"))

    return (
        <section id="portfolio" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of my recent work across web development, security, and design.
                    </p>
                </div>

                {/* Portfolio Video Overview */}
                <div className="mb-16 animate-fade-in-up delay-200">
                    <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20">
                            <video
                                controls
                                className="w-full h-full object-cover"
                                poster="/modern-tech-office-workspace-with-developers-codin.jpg"
                            >
                                <source src="/Favour Omeiri Portfolio V2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">Portfolio Overview</h3>
                            <p className="text-muted-foreground text-sm">A quick introduction to my work and skills.</p>
                        </div>
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={filter === cat ? "default" : "outline"}
                            onClick={() => setFilter(cat)}
                            className={`rounded-full px-6 transition-all ${filter === cat ? "shadow-lg bg-primary text-white" : "hover:border-primary hover:text-primary"}`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <Card key={index} className="group overflow-hidden border-none shadow-none hover:shadow-2xl transition-all duration-300 bg-background rounded-2xl">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors z-10"></div>
                                {/* Placeholder/Actual Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay Actions */}
                                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm gap-4">
                                    <Button size="icon" variant="secondary" className="rounded-full" onClick={() => project.link !== "#" && window.open(project.link, "_blank")}>
                                        <ExternalLink className="h-5 w-5" />
                                    </Button>
                                    {project.github && project.github !== "#" && (
                                        <Button size="icon" variant="secondary" className="rounded-full" onClick={() => window.open(project.github, "_blank")}>
                                            <Github className="h-5 w-5" />
                                        </Button>
                                    )}
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <Badge variant="outline" className="mb-2 text-xs font-normal border-primary/20 text-primary">{project.category}</Badge>
                                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                                    </div>
                                </div>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <span key={t} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-md">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
