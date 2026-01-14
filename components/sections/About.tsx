"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Shield, Code, Palette, Zap } from "lucide-react"

export default function About() {
    const cards = [
        {
            icon: Code,
            title: "Full-Stack Development",
            description: "Building scalable web applications using modern stacks like React, Next.js, and Node.js."
        },
        {
            icon: Shield,
            title: "Cybersecurity",
            description: "Ensuring digital safety through vulnerability assessments, pen-testing, and security audits."
        },
        {
            icon: Palette,
            title: "UI/UX & Graphics",
            description: "Designing intuitive interfaces and professional graphics with Figma, Photoshop, and Corel Draw."
        }
    ]

    return (
        <section id="about" className="py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Transforming Ideas into <span className="text-primary">Digital Reality</span></h2>
                    <p className="text-lg text-muted-foreground">
                        I am Favour Omeiri, a versatile tech professional with a passion for creating secure, beautiful, and functional digital experiences. With expertise spanning development, design, and security, I bring a unique holistic approach to every project.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cards.map((card, index) => (
                        <Card key={index} className="glass-card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-none bg-background/50">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <card.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold">{card.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {card.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
