"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Briefcase, Calendar, ChevronRight } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function ExperienceSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: "",
      period: t("experience.job1.period"),
      current: true,
      responsibilities: [
        t("experience.job1.resp1"),
        t("experience.job1.resp2"),
        t("experience.job1.resp3"),
        t("experience.job1.resp4"),
        t("experience.job1.resp5"),
        t("experience.job1.resp6"),
      ],
      technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "GitHub Actions", "CloudWatch"],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      period: t("experience.job2.period"),
      current: false,
      responsibilities: [
        t("experience.job2.resp1"),
        t("experience.job2.resp2"),
        t("experience.job2.resp3"),
        t("experience.job2.resp4"),
      ],
      technologies: ["AWS", "Terraform", "Ansible", "Docker", "GitLab CI", "Bash"],
    },
  ]

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute left-0 top-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-4">
            {t("experience.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            {t("experience.title")}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={cn(
                  "relative grid md:grid-cols-2 gap-8 transition-all duration-700",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 z-10">
                  {exp.current && (
                    <span className="absolute -inset-2 rounded-full bg-primary/30 animate-ping" />
                  )}
                </div>

                {/* Content - Alternating sides */}
                <div
                  className={cn(
                    "ml-8 md:ml-0",
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"
                  )}
                >
                  {/* Card */}
                  <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300">
                    {/* Current Badge */}
                    {exp.current && (
                      <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {t("experience.current")}
                      </span>
                    )}

                    {/* Header */}
                    <div className={cn("mb-4", index % 2 === 0 && "md:text-right")}>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground flex items-center gap-2 tracking-[-0.01em]">
                        <Briefcase className="w-5 h-5 text-primary" />
                        {exp.title}
                      </h3>
                    </div>

                    {/* Responsibilities */}
                    <ul className={cn("space-y-2 mb-6", index % 2 === 0 && "md:text-left")}>
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className={cn("flex flex-wrap gap-2", index % 2 === 0 && "md:justify-end")}>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-accent border border-secondary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                {index % 2 === 0 ? (
                  <div className="hidden md:block" />
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
