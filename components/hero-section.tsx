"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown, Download, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/lib/i18n"

export function HeroSection() {
  const { t } = useLanguage()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      alpha: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.1,
        })
      }
    }

    const drawGrid = () => {
      ctx.strokeStyle = "rgba(58, 69, 85, 0.3)"
      ctx.lineWidth = 1

      const gridSize = 60
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }
    }

    const drawParticles = () => {
      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(152, 193, 217, ${particle.alpha})`
        ctx.fill()

        // Draw connections
        particles.slice(i + 1).forEach((other) => {
          const dx = particle.x - other.x
          const dy = particle.y - other.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `rgba(152, 193, 217, ${0.1 * (1 - distance / 120)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawGrid()
      drawParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resize()
    createParticles()
    animate()

    window.addEventListener("resize", () => {
      resize()
      createParticles()
    })

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#293242] via-transparent to-[#293242]" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/10 to-transparent opacity-50" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary/10 to-transparent opacity-50" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-accent text-sm font-medium mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              {t("hero.available")}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground mb-4 tracking-tight">
              {t("hero.title")}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {t("hero.subtitle")}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-accent font-medium mb-6 tracking-[-0.01em]">
              {t("hero.role")}
            </p>

            <p className="text-muted-foreground text-base sm:text-lg leading-[1.7] mb-8 max-w-xl mx-auto lg:mx-0">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 tracking-[-0.01em] group"
                onClick={() =>
                  document
                    .getElementById("experiencia")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {t("hero.cta.experience")}
                <ArrowDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-muted text-foreground font-medium px-8 tracking-[-0.01em]"
                onClick={() =>
                  document
                    .getElementById("contacto")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Mail className="mr-2 w-4 h-4" />
                {t("hero.cta.contact")}
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-accent hover:text-foreground hover:bg-muted font-medium px-8 tracking-[-0.01em]"
                asChild
              >
                <a href="/felipe-velasco-cv.pdf" download="Felipe_Velasco_CV.pdf">
                  <Download className="mr-2 w-4 h-4" />
                  {t("hero.cta.download")}
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
                  +4
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {t("hero.stats.years")}
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
                  AWS
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stats.certified")}</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-primary tracking-tight">
                  100%
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1">{t("hero.stats.dedication")}</div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 rounded-3xl blur-2xl opacity-50" />

              {/* Card */}
              <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 max-w-sm">
                {/* Profile Image */}
                <div className="w-48 h-48 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 border border-border flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/felipe-profile.png"
                    alt="Felipe Velasco"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Terminal-style info */}
                <div className="bg-[#1a1f2a] rounded-lg p-4 font-mono text-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-muted-foreground">
                    <span className="text-primary">$</span> whoami
                  </div>
                  <div className="text-foreground">felipe.velasco</div>
                  <div className="text-muted-foreground mt-2">
                    <span className="text-primary">$</span> cat role.txt
                  </div>
                  <div className="text-accent">{t("hero.terminal.role")}</div>
                  <div className="text-muted-foreground mt-2">
                    <span className="text-primary">$</span> echo $STACK
                  </div>
                  <div className="text-foreground">
                    AWS | K8s | Terraform | CI/CD
                  </div>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mt-6 justify-center">
                  {["Kubernetes", "AWS", "Terraform", "Docker"].map((tech) => (
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
          </div>
        </div>
      </div>

    </section>
  )
}
