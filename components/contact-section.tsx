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
      value: "Felipevelasco.211@gmail.com",
      href: "mailto:Felipevelasco.211@gmail.com",
      isPlaceholder: false,
    },
    {
      icon: Linkedin,
      labelKey: "contact.linkedin",
      value: "www.linkedin.com/in/felipe-velasco-4125291a3",
      href: "https://www.linkedin.com/in/felipe-velasco-4125291a3",
      isPlaceholder: false,
    },
    {
      icon: Github,
      labelKey: "contact.github",
      value: "github.com/felipevelascohz",
      href: "https://github.com/felipevelascohz",
      isPlaceholder: false,
    },
    {
      icon: Gitlab,
      labelKey: "contact.gitlab",
      value: "gitlab.com/felipevelascohz",
      href: "https://gitlab.com/felipevelascohz",
      isPlaceholder: false,
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
            <div className="space-y-4">
              {contactInfo.map((item) => 
                item.isPlaceholder ? (
                  <div
                    key={item.labelKey}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50 cursor-default"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{t(item.labelKey)}</p>
                      <p className="text-muted-foreground font-medium truncate italic">
                        {item.valueKey ? t(item.valueKey) : item.value}
                      </p>
                    </div>
                  </div>
                ) : (
                  <a
                    key={item.labelKey}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-muted-foreground">{t(item.labelKey)}</p>
                      <p className="text-foreground font-medium truncate">
                        {item.value}
                      </p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
