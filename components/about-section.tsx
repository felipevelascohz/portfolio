"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Cloud, Shield, Cog, Zap } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const highlights = [
    {
      icon: Cloud,
      titleKey: "about.highlight.cloud.title",
      descKey: "about.highlight.cloud.desc",
    },
    {
      icon: Shield,
      titleKey: "about.highlight.security.title",
      descKey: "about.highlight.security.desc",
    },
    {
      icon: Cog,
      titleKey: "about.highlight.automation.title",
      descKey: "about.highlight.automation.desc",
    },
    {
      icon: Zap,
      titleKey: "about.highlight.cicd.title",
      descKey: "about.highlight.cicd.desc",
    },
  ]

  return (
    <section
      id="sobre-mi"
      ref={ref}
      className="relative pt-12 pb-24 lg:pt-16 lg:pb-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2398c1d9' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            )}
          >
            <span className="inline-block text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-4">
              {t("about.label")}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-6 tracking-tight">
              {t("about.title")}
              <span className="block text-accent">
                {t("about.title.highlight")}
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-[1.7]">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>


          </div>

          {/* Right Column - Highlights Grid */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700 delay-200",
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            )}
          >
            {highlights.map((highlight, index) => (
              <div
                key={highlight.titleKey}
                className={cn(
                  "group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1",
                  index % 2 === 1 && "mt-8"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-foreground mb-2 tracking-[-0.01em]">
                  {t(highlight.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(highlight.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
