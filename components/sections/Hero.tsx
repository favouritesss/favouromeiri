"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Eye, Github, Linkedin, Twitter } from "lucide-react"

export default function Hero() {


    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-70 animate-float" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-70 animate-float delay-500" />
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-sm font-medium mb-4">
                            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
                            Available for new projects
                        </div>

                        <h1 className="text-5xl lg:text-7xl font-bold font-heading tracking-tight leading-tight">
                            Hi, I'm <br />
                            <span className="text-gradient">Favour Omeiri</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 font-light">
                            Full-Stack Developer, Cybersecurity Expert & Graphic Designer building digital excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Button
                                size="lg"
                                className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-primary/25 transition-all"
                                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            >
                                Start Project <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/5"
                                onClick={() => window.open('/resume.pdf', '_blank')}
                            >
                                View Resume <Eye className="ml-2 h-5 w-5" />
                            </Button>
                        </div>

                        <div className="flex items-center justify-center lg:justify-start gap-6 pt-8 text-muted-foreground">
                            <a href="https://github.com/favouritesss" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-transform hover:scale-110">
                                <Github className="h-6 w-6" />
                            </a>
                            <a href="https://www.linkedin.com/in/omeiri-favour-620a582a6/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-transform hover:scale-110">
                                <Linkedin className="h-6 w-6" />
                            </a>
                            <a href="https://x.com/that_tech_bee?s=21" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-transform hover:scale-110">
                                <Twitter className="h-6 w-6" />
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none animate-fade-in-up delay-200">
                        <div className="relative">
                            {/* Interactive decorative circles */}
                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary to-secondary opacity-30 blur-2xl animate-pulse"></div>
                            <div className="relative rounded-3xl overflow-hidden glass-card p-2">
                                <img
                                    src="/modern-tech-office-workspace-with-developers-codin.jpg"
                                    alt="Favour Omeiri Workspace"
                                    className="rounded-2xl w-full object-cover shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                                />
                            </div>
                            {/* Floating Badges */}
                            <div className="absolute -right-8 top-10 glass-card p-4 rounded-xl flex items-center gap-3 animate-float delay-100 shadow-lg">
                                <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500">
                                    <code className="font-bold">React</code>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Expert in</div>
                                    <div className="font-bold text-sm">Frontend Dev</div>
                                </div>
                            </div>
                            <div className="absolute -left-8 bottom-20 glass-card p-4 rounded-xl flex items-center gap-3 animate-float delay-300 shadow-lg">
                                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center text-green-500">
                                    <span className="font-bold">Sec</span>
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground">Certified</div>
                                    <div className="font-bold text-sm">Cybersecurity</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
