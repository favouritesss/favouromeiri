"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
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
        }
    ]

    return (
        <section id="testimonials" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent bg-[length:20px_20px]"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">What Clients <span className="text-secondary">Say</span></h2>
                    <p className="text-primary-foreground/80 max-w-2xl mx-auto">Trusted by industry leaders.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-primary-foreground/5 border-none text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/10 transition-colors">
                            <CardContent className="p-8 pt-10 relative">
                                <Quote className="absolute top-6 left-6 h-8 w-8 text-secondary/30" />
                                <div className="flex mb-4 relative z-10">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="mb-6 leading-relaxed italic relative z-10">"{testimonial.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-secondary/20 overflow-hidden border-2 border-secondary">
                                        <img
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">{testimonial.name}</h4>
                                        <p className="text-sm text-secondary">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
