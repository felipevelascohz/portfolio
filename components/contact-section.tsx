"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Mail, Linkedin, Github, Gitlab, ExternalLink } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ContactSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: Mail,
      labelKey: "contact.email",
      href: "mailto:Felipevelasco.211@gmail.com",
    },
    {
      icon: Linkedin,
      labelKey: "contact.linkedin",
      href: "https://www.linkedin.com/in/felipe-velasco-4125291a3",
    },
    {
      icon: Github,
      labelKey: "contact.github",
      href: "https://github.com/felipevelascohz",
    },
    {
      icon: Gitlab,
      labelKey: "contact.gitlab",
      href: "https://gitlab.com/felipevelascohz",
    },
  ]

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#1e2633]"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            {t("contact.title")}
          </h2>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((item) => (
                <a
                  key={item.labelKey}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">
                      {t(item.labelKey)}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
