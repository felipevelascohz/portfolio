"use client"

import { Heart } from "lucide-react"
import { useLanguage } from "@/lib/i18n"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="relative py-8 bg-[#1a1f2a] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Felipe Velasco Hernández. {t("footer.copyright")}
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            {t("footer.made")} <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> {t("footer.by")}{" "}
            <span className="relative group">
              <span className="text-primary cursor-default">Efeguai Design</span>
              <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1.5 text-xs text-foreground bg-card border border-border rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                efeguaidesign@gmail.com
              </span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
