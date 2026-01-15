"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

    const FORMSPREE_FORM_ID = "mqadgvan"

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission or use actual formspree
        const form = e.target as HTMLFormElement
        const data = new FormData(form)

        try {
            const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            })

            if (res.ok) {
                setSubmitStatus("success")
                form.reset()
            } else {
                setSubmitStatus("error")
            }
        } catch (err) {
            setSubmitStatus("error")
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setSubmitStatus("idle"), 5000)
        }
    }

    return (
        <section id="contact" className="py-24 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Contact Info */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">Let's Work <span className="text-primary">Together</span></h2>
                            <p className="text-xl text-muted-foreground">
                                Have a project in mind? Looking for a cybersecurity audit or a stunning design? I'm ready to help you achieve your goals.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                                <CardContent className="flex items-center p-6 gap-6">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Email</h3>
                                        <p className="text-muted-foreground">favouromeiri5@gmail.com</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                                <CardContent className="flex items-center p-6 gap-6">
                                    <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Phone</h3>
                                        <p className="text-muted-foreground">09060474709</p>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-lg bg-background/50 backdrop-blur-sm">
                                <CardContent className="flex items-center p-6 gap-6">
                                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center text-orange-500">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold">Location</h3>
                                        <p className="text-muted-foreground">Owerri, Nigeria (Available Remote)</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card p-8 md:p-10 rounded-3xl shadow-2xl animate-fade-in-up delay-200 border border-border">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" name="name" placeholder="Enter your first name" required className="bg-muted/50 border-border/50 h-12" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" name="email" type="email" placeholder="Enter your email" required className="bg-muted/50 border-border/50 h-12" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                                <Input id="subject" name="_subject" placeholder="Enter subject" required className="bg-muted/50 border-border/50 h-12" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <Textarea id="message" name="message" placeholder="Tell me about your project..." required className="min-h-[150px] bg-muted/50 border-border/50 resize-none p-4" />
                            </div>

                            <Button type="submit" className="w-full h-14 text-lg font-bold rounded-xl" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send className="ml-2 h-5 w-5" />
                                    </>
                                )}
                            </Button>

                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-500/10 text-green-500 rounded-xl text-center font-medium animate-pulse">
                                    Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === "error" && (
                                <div className="p-4 bg-red-500/10 text-red-500 rounded-xl text-center font-medium">
                                    Something went wrong. Please try again.
                                </div>
                            )}
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
}
