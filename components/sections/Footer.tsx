"use client"

import { Github, Linkedin, Twitter, Heart } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-muted py-12 border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold font-heading text-primary mb-2">FAVTECH</h3>
                        <p className="text-muted-foreground text-sm">Building digital excellence, one pixel at a time.</p>
                    </div>

                    {/* Socials */}
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-md transition-all">
                            <Github className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-md transition-all">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-md transition-all">
                            <Twitter className="h-5 w-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Omeiri Favour. All rights reserved.</p>
                    Made with <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" /> in Owerri
                </div>
            </div>
        </div>
        </footer >
    )
}
