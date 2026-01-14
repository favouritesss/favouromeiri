"use client"

import { Badge } from "@/components/ui/badge"

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript", "Bootstrap"]
        },
        {
            title: "Backend & Database",
            skills: ["Node.js", "Python", "PHP", "SQL", "MongoDB", "PostgreSQL", "Firebase"]
        },
        {
            title: "Cybersecurity",
            skills: ["Penetration Testing", "Network Security", "Vulnerability Assessment", "Wireshark", "Metasploit", "Nmap"]
        },
        {
            title: "Graphic Design & Tools",
            skills: ["Adobe Photoshop", "Corel Draw", "Canva", "Figma", "Adobe XD", "UI/UX Design"]
        }
    ]

    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical <span className="text-secondary">Arsenal</span></h2>
                    <p className="text-muted-foreground">Tools and technologies I use to craft world-class solutions.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {skillCategories.map((category, idx) => (
                        <div key={idx} className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></span>
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="text-sm py-2 px-4 rounded-lg bg-background border border-border hover:border-primary hover:text-primary transition-all cursor-default"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
