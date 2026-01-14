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
