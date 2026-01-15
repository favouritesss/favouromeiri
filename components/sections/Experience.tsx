"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function Experience() {
    const experience = [
        {
            year: "01/2025 – 08/2025",
            title: "Full Stack Developer & Penetration Tester",
            company: "Aptech",
            description: "Developed responsive web applications using React, Python, and PHP. Conducted penetration testing to enhance security by 20%. Designed UI/UX prototypes with Figma and optimized RESTful APIs/SQL databases."
        },
        {
            year: "01/2023 – 12/2024",
            title: "Virtual Assistant",
            company: "TLO LLC Company",
            description: "Managed client communications via digital platforms, increasing engagement by 30%. Coordinated digital tasks using Google Suite and created engaging content for online platforms."
        },
        {
            year: "01/2020 – 07/2021",
            title: "Computer Instructor",
            company: "Freedom Communications Nig.",
            description: "Taught Computer Appreciation Skills and digital literacy with a 95% student pass rate. Developed instructional content and provided coaching on digital tools."
        },
        {
            year: "01/2019 – 12/2019",
            title: "Computer Operator",
            company: "Jiomax Computer Institute",
            description: "Managed client inquiries and digital tasks, improving efficiency by 15%. Handled content formatting, uploads, and system troubleshooting."
        }
    ]

    return (
        <section id="experience" className="py-24 bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Professional <span className="text-primary">Journey</span></h2>
                    <p className="text-muted-foreground">My career progression and key milestones.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/50 to-secondary/50"></div>

                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>

                                {/* Dot */}
                                <div className="absolute left-4 md:left-1/2 transform -translate-x-2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-4 border-secondary z-10 shadow-[0_0_10px_rgba(45,212,191,0.5)]"></div>

                                {/* Empty space for the other side */}
                                <div className="hidden md:block w-1/2"></div>

                                {/* Content */}
                                <div className={`ml-12 md:ml-0 w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                                    <Card className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-background/80 backdrop-blur-sm">
                                        <CardContent className="p-6">
                                            <div className={`flex items-center gap-2 mb-2 text-primary font-medium ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                                                <Calendar className="h-4 w-4" />
                                                <span>{exp.year}</span>
                                            </div>
                                            <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                                            <p className="text-secondary font-medium mb-3">{exp.company}</p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
