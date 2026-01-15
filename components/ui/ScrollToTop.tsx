"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    if (!isVisible) {
        return null
    }

    return (
        <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
            <Button
                variant="outline"
                size="icon"
                onClick={scrollToTop}
                className="rounded-full shadow-lg bg-background/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110"
                aria-label="Scroll to top"
            >
                <ArrowUp className="h-5 w-5" />
            </Button>
        </div>
    )
}
