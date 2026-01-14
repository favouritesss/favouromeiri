"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "I offer comprehensive web development, cybersecurity consulting, UI/UX design, business writing, and virtual assistant services. Each service is tailored to meet your specific business needs.",
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity and scope. Simple websites take 2-4 weeks, while complex applications can take 2-6 months. I provide detailed timelines during our initial consultation.",
        },
        {
            question: "What is your pricing structure?",
            answer: "Pricing depends on project scope, complexity, and timeline. I offer competitive rates starting from ₦50,000 for basic projects. Contact me for a detailed quote based on your specific requirements.",
        },
        {
            question: "Do you provide ongoing support and maintenance?",
            answer: "Yes, I offer ongoing support and maintenance packages to ensure your project continues to perform optimally. This includes updates, security patches, and technical support.",
        },
        {
            question: "Can you work with international clients?",
            answer: "I work with clients globally and am experienced in remote collaboration. I'm available across different time zones and use modern communication tools for seamless project management.",
        },
        {
            question: "What makes your cybersecurity services unique?",
            answer: "My cybersecurity approach combines technical expertise with business understanding. I provide comprehensive assessments, practical recommendations, and ongoing monitoring to protect your digital assets effectively.",
        },
    ]

    return (
        <section id="faq" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Frequently Asked <span className="text-primary">Questions</span></h2>
                    <p className="text-muted-foreground">Common questions about my services and process.</p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-4 data-[state=open]:bg-muted/30 transition-colors">
                            <AccordionTrigger className="text-left font-medium text-lg py-4 hover:text-primary transition-colors hover:no-underline">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
}
