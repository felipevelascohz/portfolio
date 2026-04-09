"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { GraduationCap, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function EducationSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const education = [
    {
      degree: t("education.degree"),
      institution: t("education.institution"),
      period: t("education.period"),
      location: t("education.location"),
      description: t("education.desc"),
      highlights: [
        t("education.highlight1"),
        t("education.highlight2"),
        t("education.highlight3"),
        t("education.highlight4"),
      ],
    },
  ]

  return (
    <section
      id="educacion"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-4">
            {t("education.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            {t("education.title")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.7] max-w-2xl mx-auto">
            {t("education.description")}
          </p>
        </div>

        {/* Education Card */}
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={edu.degree}
              className={cn(
                "group relative transition-all duration-700",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Card */}
              <div className="relative p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                {/* Icon */}
                <div className="absolute -top-6 left-8 md:left-10 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>

                <div className="pt-4">
                  {/* Header */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground mb-2 tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="text-base sm:text-lg text-primary font-medium mb-4">
                    {edu.institution}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {edu.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-[1.7] text-sm sm:text-base">
                    {edu.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid sm:grid-cols-2 gap-3">
                    {edu.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-2 text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-foreground">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
