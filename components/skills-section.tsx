"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { 
  Cloud, 
  Container, 
  Boxes, 
  Terminal, 
  Code2, 
  FileCode, 
  Github, 
  Settings, 
  Package,
  Server,
  Layers
} from "lucide-react"
import { FaGitlab } from "react-icons/fa"
import { useLanguage } from "@/lib/i18n"

const skills = [
  { name: "Kubernetes", icon: Layers, color: "#326CE5" },
  { name: "AWS", icon: Cloud, color: "#FF9900" },
  { name: "Terraform", icon: Boxes, color: "#7B42BC" },
  { name: "GitLab", icon: FaGitlab, color: "#FC6D26" },
  { name: "Docker", icon: Container, color: "#2496ED" },
  { name: "Bash", icon: Terminal, color: "#4EAA25" },
  { name: "Python", icon: Code2, color: "#3776AB" },
  { name: "TypeScript", icon: FileCode, color: "#3178C6" },
  { name: "CDK", icon: Server, color: "#FF9900" },
  { name: "GitHub", icon: Github, color: "#ffffff" },
  { name: "Ansible", icon: Settings, color: "#EE0000" },
  { name: "Packer", icon: Package, color: "#02A8EF" },
]

export function SkillsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })
  const { t } = useLanguage()

  return (
    <section
      id="competencias"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#1e2633]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <span className="inline-block text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-4">
            {t("skills.label")}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
            {t("skills.title")}
          </h2>
        </div>

        {/* Skills Grid - Simple 4x3 layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <div
                key={skill.name}
                className={cn(
                  "group flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:-translate-y-1",
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <Icon 
                  className="w-10 h-10 mb-3 transition-transform duration-300 group-hover:scale-110" 
                  style={{ color: skill.color }}
                />
                <span className="text-sm font-medium text-foreground text-center">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
