"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Award, ExternalLink, CheckCircle } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function CertificationsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  const certifications = [
    {
      title: t("certifications.aws.title"),
      level: t("certifications.aws.level"),
      issuer: t("certifications.aws.issuer"),
      verificationUrl: "https://www.credly.com/badges/38861ed9-5e02-43bf-81c4-9b93c7027297/linked_in_profile",
      validPeriod: "2024 – 2027",
      validLabel: t("certifications.aws.valid"),
      logo: "AWS",
      color: "from-[#FF9900] to-[#FF6600]",
      skills: [
        t("certifications.skill1"),
        t("certifications.skill2"),
        t("certifications.skill3"),
        t("certifications.skill4"),
      ],
    },
  ]

  return (
    <section
      id="certificaciones"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#1e2633]"
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
            {t("certifications.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mb-4 tracking-tight">
            {t("certifications.title")}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-[1.7] max-w-2xl mx-auto">
            {t("certifications.description")}
          </p>
        </div>

        {/* Certification Cards */}
        <div className="max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className={cn(
                "relative group transition-all duration-700",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Glow Effect */}
              <div
                className={cn(
                  "absolute -inset-1 bg-gradient-to-r rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500",
                  cert.color
                )}
              />

              {/* Card */}
              <div className="relative bg-card border border-border rounded-2xl p-8 md:p-10 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    }}
                  />
                </div>

                <div className="relative grid md:grid-cols-[auto,1fr] gap-8 items-center">
                  {/* Logo Badge */}
                  <div className="flex justify-center md:justify-start">
                    <div
                      className={cn(
                        "w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br flex items-center justify-center text-white font-bold text-4xl md:text-5xl shadow-2xl group-hover:scale-105 transition-transform duration-500",
                        cert.color
                      )}
                    >
                      {cert.logo}
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Title */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-1 tracking-tight">
                          {cert.title}
                        </h3>
                        <p className="text-base sm:text-lg text-primary font-medium">
                          {cert.level}
                        </p>
                      </div>
                      <Award className="w-8 h-8 text-primary" />
                    </div>

                    {/* Issuer & Period */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        {cert.issuer}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {cert.validLabel}: {cert.validPeriod}
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground mb-3">
                        {t("certifications.skills.label")}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {cert.skills.map((skill) => (
                          <div
                            key={skill}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                            <span>{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-sm font-medium"
                    >
                      {t("certifications.verify")}
                      <ExternalLink className="w-4 h-4" />
                    </a>
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
