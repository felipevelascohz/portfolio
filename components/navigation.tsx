"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X, Globe, Terminal } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useLanguage } from "@/lib/i18n"

const navItems = [
  { key: "nav.inicio", href: "#inicio", isHome: true },
  { key: "nav.sobre-mi", href: "#sobre-mi" },
  { key: "nav.competencias", href: "#competencias" },
  { key: "nav.experiencia", href: "#experiencia" },
  { key: "nav.certificaciones", href: "#certificaciones" },
  { key: "nav.educacion", href: "#educacion" },
  { key: "nav.contacto", href: "#contacto" },
]

export function Navigation() {
  const { language, setLanguage, t } = useLanguage()
  const [activeSection, setActiveSection] = useState("inicio")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const nextLanguage = language === "es" ? "en" : "es"

  const toggleLanguage = () => {
    setLanguage(nextLanguage)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Determine active section
      const sections = navItems.map((item) => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <TooltipProvider delayDuration={300}>
      {/* Desktop Floating Navigation */}
      <nav
        className={cn(
          "fixed top-5 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden lg:block",
          isScrolled ? "top-3" : "top-5"
        )}
      >
        <div
          className={cn(
            "flex items-center gap-0.5 px-1.5 py-1 rounded-full transition-all duration-500",
            "bg-[#1e2633]/30 backdrop-blur-2xl",
            "border border-white/[0.04]",
            "shadow-[0_4px_24px_rgba(0,0,0,0.15)]",
            isScrolled && "bg-[#1e2633]/50 border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.25)]"
          )}
        >
          {navItems.map((item) => {
            const isHome = 'isHome' in item && item.isHome
            const navLink = (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.href)
                }}
                className={cn(
                  "relative px-3 py-1.5 text-[12px] font-medium transition-all duration-300 rounded-full whitespace-nowrap",
                  "flex items-center justify-center",
                  isHome && "px-2.5",
                  activeSection === item.href.substring(1)
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                )}
              >
                {/* Active indicator background */}
                {activeSection === item.href.substring(1) && (
                  <span 
                    className="absolute inset-0 rounded-full bg-primary/90 -z-10 shadow-[0_2px_8px_rgba(237,108,78,0.3)]"
                    style={{ 
                      animation: "fadeIn 0.25s ease-out" 
                    }}
                  />
                )}
                {isHome ? <Terminal className="w-3.5 h-3.5 opacity-70" /> : t(item.key)}
              </a>
            )

            if (isHome) {
              return (
                <Tooltip key={item.key}>
                  <TooltipTrigger asChild>
                    {navLink}
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="bg-[#1e2633]/95 border-white/5 text-white/80 text-xs">
                    <p>{t(item.key)}</p>
                  </TooltipContent>
                </Tooltip>
              )
            }

            return navLink
          })}

          {/* Separator */}
          <div className="w-px h-4 bg-white/[0.06] mx-1" />

          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300",
              "text-white/50 hover:text-white/80"
            )}
            aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe className="w-3 h-3" />
            <span className="uppercase">{nextLanguage}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Mobile Header */}
        <div
          className={cn(
            "flex items-center justify-between px-4 py-3 transition-all duration-500",
            isScrolled
              ? "bg-[#1e2633]/70 backdrop-blur-xl"
              : "bg-transparent"
          )}
        >
          {/* Empty spacer for centering */}
          <div className="w-20" />

          {/* Center indicator dot when scrolled */}
          <div className={cn(
            "flex items-center gap-2 transition-all duration-300",
            isScrolled ? "opacity-100" : "opacity-0"
          )}>
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-1">
            {/* Mobile Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-1 p-2.5 rounded-full transition-all duration-300",
                "text-white/60 hover:text-white hover:bg-white/5"
              )}
              aria-label={language === "es" ? "Switch to English" : "Cambiar a Español"}
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-medium uppercase">{nextLanguage}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2.5 rounded-full transition-all duration-300",
                "text-white/60 hover:text-white hover:bg-white/5"
              )}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-[#293242]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col",
            isMobileMenuOpen 
              ? "opacity-100 pointer-events-auto" 
              : "opacity-0 pointer-events-none"
          )}
          style={{ top: "56px" }}
        >
          <div className="flex-1 flex flex-col justify-center px-8 py-12">
            <div className="flex flex-col gap-2">
              {navItems.map((item, index) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={cn(
                    "px-4 py-4 text-lg font-medium transition-all duration-300 rounded-2xl",
                    "transform",
                    isMobileMenuOpen 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-8 opacity-0",
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-primary/20 to-transparent text-primary border-l-2 border-primary"
                      : "text-white/60 hover:text-white hover:bg-white/5"
                  )}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms"
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu footer */}
          <div className="px-8 py-8 border-t border-white/5">
            <p className="text-sm text-white/40 text-center">
              Felipe Velasco Hernández
            </p>
          </div>
        </div>
      </nav>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </TooltipProvider>
  )
}
