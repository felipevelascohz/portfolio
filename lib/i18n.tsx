"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

export type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    "nav.inicio": "Inicio",
    "nav.sobre-mi": "Sobre mí",
    "nav.competencias": "Competencias",
    "nav.experiencia": "Experiencia",
    "nav.certificaciones": "Certificaciones",
    "nav.educacion": "Educación",
    "nav.contacto": "Contacto",

    // Hero
    "hero.available": "Disponible para nuevos proyectos",
    "hero.title": "Felipe Velasco",
    "hero.subtitle": "Hernández",
    "hero.role": "Ingeniero DevOps / DevSecOps",
    "hero.description": "Ingeniero DevOps con más de 4 años de experiencia ejerciendo el rol. Apasionado por la automatización mediante pipelines y las tecnologías Cloud. Interesado en un lugar de trabajo en donde pueda desarrollar mis habilidades con el fin de obtener un crecimiento constante a nivel personal y profesional.",
    "hero.cta.experience": "Ver experiencia",
    "hero.cta.contact": "Contactar",
    "hero.cta.download": "Descargar CV",
    "hero.stats.years": "Años de experiencia",
    "hero.stats.certified": "Certificado",
    "hero.stats.dedication": "Dedicación",
    "hero.terminal.role": "DevOps / DevSecOps Engineer",
    "hero.scroll": "Scroll",

    // About
    "about.label": "Sobre mí",
    "about.title": "Más de 4 años",
    "about.title.highlight": "transformando infraestructura",
    "about.p1": "Soy un ingeniero apasionado por la automatización, la confiabilidad de sistemas y las prácticas modernas de DevOps y DevSecOps. Mi enfoque combina experiencia técnica profunda con una visión estratégica orientada a resultados.",
    "about.p2": "He trabajado en entornos híbridos AWS y Azure, con enfoque en automatización, seguridad y operación de plataformas productivas. Mi experiencia incluye el sector bancario, donde participé en la operación de aplicaciones móviles con millones de usuarios.",
    "about.p3": "Mi filosofía se centra en la mejora continua, la colaboración entre equipos y la adopción de tecnologías cloud-native que permitan a las organizaciones innovar con confianza.",
    "about.highlight.cloud.title": "Cloud Native",
    "about.highlight.cloud.desc": "Diseño e implementación de arquitecturas cloud en AWS y Azure",
    "about.highlight.security.title": "Seguridad",
    "about.highlight.security.desc": "Integración de prácticas de seguridad en todo el ciclo DevOps",
    "about.highlight.automation.title": "Automatización",
    "about.highlight.automation.desc": "Infraestructura como código con Terraform, CDK y Ansible",
    "about.highlight.cicd.title": "CI/CD",
    "about.highlight.cicd.desc": "Pipelines eficientes con GitHub Actions y GitLab CI",

    // Skills
    "skills.label": "Competencias Técnicas",
    "skills.title": "Stack Tecnológico",
    "skills.description": "Dominio de las herramientas y tecnologías más demandadas en el ecosistema DevOps y cloud-native moderno",
    "skills.category.cloud": "Cloud & Infrastructure",
    "skills.category.containers": "Contenedores & Orquestación",
    "skills.category.cicd": "CI/CD & Automatización",
    "skills.category.iac": "IaC & Configuración",
    "skills.category.monitoring": "Monitoreo & Operaciones",
    "skills.category.programming": "Programación & Scripting",
    "skills.stats.technologies": "Tecnologías",
    "skills.stats.certifications": "Certificaciones",
    "skills.stats.projects": "Proyectos Cloud",
    "skills.stats.pipelines": "Pipelines CI/CD",

    // Experience
    "experience.label": "Trayectoria Profesional",
    "experience.title": "Experiencia Laboral",
    "experience.description": "Más de 4 años de experiencia en ingeniería DevOps y DevSecOps, trabajando con tecnologías de punta en entornos empresariales",
    "experience.current": "Actual",
    "experience.job1.title": "Ingeniero DevSecOps",
    "experience.job1.period": "Jun 2023 - Actualidad",
    "experience.job1.resp1": "Trabajando en entornos híbridos AWS y Azure, con enfoque en automatización, seguridad y operación de plataformas productivas.",
    "experience.job1.resp2": "Experiencia en servicios AWS: RDS, EKS, ECS, CloudFront, Route 53, Step Functions, Lambda.",
    "experience.job1.resp3": "Infraestructura como código utilizando AWS CDK, Terraform, Serverless Framework, SAM y gestión de Kubernetes mediante Helm Charts.",
    "experience.job1.resp4": "Desarrollo y mantenimiento de pipelines CI/CD en GitHub Actions y GitLab CI (deploys automatizados, testing, seguridad).",
    "experience.job1.resp5": "Monitoreo y automatización operativa con Amazon CloudWatch y EventBridge (alertas, reglas, workflows de respuesta).",
    "experience.job1.resp6": "Troubleshooting avanzado, diagnóstico y resolución de incidentes en ambientes productivos, asegurando alta disponibilidad y estabilidad del sistema.",
    "experience.job2.title": "Ingeniero DevOps",
    "experience.job2.company": "Banco Estado",
    "experience.job2.period": "Jun 2021 - Jun 2023",
    "experience.job2.resp1": "Ingeniero DevOps en Banco Estado, en donde participé en labores como la automatización de procesos CI/CD mediante pipelines en Gitlab.",
    "experience.job2.resp2": "Creación, mantención y administración de ambientes en AWS mediante herramientas de IaC como Terraform y Ansible.",
    "experience.job2.resp3": "Parte de la unidad de operaciones de la aplicación móvil del banco que cuenta con 8 millones de clientes.",
    "experience.job2.resp4": "Mi rol fue mantener la continuidad operacional del servicio, analizando errores, generando mejoras y resolviendo incidencias presentadas en el día a día.",

    // Certifications
    "certifications.label": "Credenciales Profesionales",
    "certifications.title": "Certificaciones",
    "certifications.description": "Validación oficial de competencias y conocimientos en tecnologías cloud y DevOps",
    "certifications.aws.title": "AWS Certified Solutions Architect",
    "certifications.aws.level": "Associate",
    "certifications.aws.issuer": "Amazon Web Services (AWS)",
    "certifications.aws.valid": "Vigente",
    "certifications.skills.label": "Competencias validadas:",
    "certifications.skill1": "Diseño de arquitecturas resilientes",
    "certifications.skill2": "Arquitecturas de alto rendimiento",
    "certifications.skill3": "Arquitecturas seguras",
    "certifications.skill4": "Arquitecturas optimizadas en costo",
    "certifications.verify": "Verificar credencial",

    // Education
    "education.label": "Formación Académica",
    "education.title": "Educación",
    "education.description": "Base académica sólida en tecnologías de infraestructura y plataformas",
    "education.degree": "Ingeniería en Infraestructura y Plataformas Tecnológicas",
    "education.institution": "DUOC UC",
    "education.period": "2016 - 2019",
    "education.location": "Chile",
    "education.desc": "Formación integral en diseño, implementación y gestión de infraestructuras tecnológicas, incluyendo redes, sistemas operativos, virtualización y seguridad informática.",
    "education.highlight1": "Administración de sistemas Linux y Windows",
    "education.highlight2": "Virtualización y cloud computing",
    "education.highlight3": "Redes y telecomunicaciones",
    "education.highlight4": "Seguridad de la información",

    // Contact
    "contact.label": "Hablemos",
    "contact.title": "Contacto",
    "contact.description": "¿Tienes un proyecto en mente o buscas mejorar tu infraestructura cloud? Estoy disponible para nuevas oportunidades",
    "contact.info.title": "Información de Contacto",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.link": "Link",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.gitlab": "GitLab",
    "contact.coming_soon": "Próximamente",
    "contact.location.title": "Ubicación",
    "contact.location.city": "Santiago, Chile",
    "contact.location.remote": "Disponible para trabajo remoto",
    "contact.form.title": "Enviar Mensaje",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Tu nombre",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "¿En qué puedo ayudarte?",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Cuéntame sobre tu proyecto...",
    "contact.form.submit": "Enviar Mensaje",

    // Footer
    "footer.role": "Ingeniero DevOps / DevSecOps",
    "footer.copyright": "Todos los derechos reservados.",
    "footer.made": "Hecho con",
    "footer.by": "por",
    "footer.in": "en Chile",
  },
  en: {
    // Navigation
    "nav.inicio": "Home",
    "nav.sobre-mi": "About",
    "nav.competencias": "Skills",
    "nav.experiencia": "Experience",
    "nav.certificaciones": "Certifications",
    "nav.educacion": "Education",
    "nav.contacto": "Contact",

    // Hero
    "hero.available": "Available for new projects",
    "hero.title": "Felipe Velasco",
    "hero.subtitle": "Hernández",
    "hero.role": "DevOps / DevSecOps Engineer",
    "hero.description": "DevOps Engineer with over 4 years of experience in the role. Passionate about automation through pipelines and Cloud technologies. Looking for a workplace where I can develop my skills to achieve constant personal and professional growth.",
    "hero.cta.experience": "View experience",
    "hero.cta.contact": "Contact",
    "hero.cta.download": "Download CV",
    "hero.stats.years": "Years of experience",
    "hero.stats.certified": "Certified",
    "hero.stats.dedication": "Dedication",
    "hero.terminal.role": "DevOps / DevSecOps Engineer",
    "hero.scroll": "Scroll",

    // About
    "about.label": "About me",
    "about.title": "Over 4 years",
    "about.title.highlight": "transforming infrastructure",
    "about.p1": "I'm an engineer passionate about automation, system reliability, and modern DevOps and DevSecOps practices. My approach combines deep technical expertise with a results-oriented strategic vision.",
    "about.p2": "I have worked in hybrid AWS and Azure environments, focusing on automation, security, and operation of production platforms. My experience includes the banking sector, where I participated in the operation of mobile applications with millions of users.",
    "about.p3": "My philosophy centers on continuous improvement, team collaboration, and the adoption of cloud-native technologies that enable organizations to innovate with confidence.",
    "about.highlight.cloud.title": "Cloud Native",
    "about.highlight.cloud.desc": "Design and implementation of cloud architectures on AWS and Azure",
    "about.highlight.security.title": "Security",
    "about.highlight.security.desc": "Integration of security practices throughout the DevOps lifecycle",
    "about.highlight.automation.title": "Automation",
    "about.highlight.automation.desc": "Infrastructure as code with Terraform, CDK, and Ansible",
    "about.highlight.cicd.title": "CI/CD",
    "about.highlight.cicd.desc": "Efficient pipelines with GitHub Actions and GitLab CI",

    // Skills
    "skills.label": "Technical Skills",
    "skills.title": "Technology Stack",
    "skills.description": "Mastery of the most in-demand tools and technologies in the modern DevOps and cloud-native ecosystem",
    "skills.category.cloud": "Cloud & Infrastructure",
    "skills.category.containers": "Containers & Orchestration",
    "skills.category.cicd": "CI/CD & Automation",
    "skills.category.iac": "IaC & Configuration",
    "skills.category.monitoring": "Monitoring & Operations",
    "skills.category.programming": "Programming & Scripting",
    "skills.stats.technologies": "Technologies",
    "skills.stats.certifications": "Certifications",
    "skills.stats.projects": "Cloud Projects",
    "skills.stats.pipelines": "CI/CD Pipelines",

    // Experience
    "experience.label": "Professional Journey",
    "experience.title": "Work Experience",
    "experience.description": "Over 4 years of experience in DevOps and DevSecOps engineering, working with cutting-edge technologies in enterprise environments",
    "experience.current": "Current",
    "experience.job1.title": "DevSecOps Engineer",
    "experience.job1.period": "Jun 2023 - Present",
    "experience.job1.resp1": "Working in hybrid AWS and Azure environments, with focus on automation, security, and operation of production platforms.",
    "experience.job1.resp2": "Experience with AWS services: RDS, EKS, ECS, CloudFront, Route 53, Step Functions, Lambda.",
    "experience.job1.resp3": "Infrastructure as code using AWS CDK, Terraform, Serverless Framework, SAM, and Kubernetes management via Helm Charts.",
    "experience.job1.resp4": "Development and maintenance of CI/CD pipelines in GitHub Actions and GitLab CI (automated deploys, testing, security).",
    "experience.job1.resp5": "Monitoring and operational automation with Amazon CloudWatch and EventBridge (alerts, rules, response workflows).",
    "experience.job1.resp6": "Advanced troubleshooting, diagnosis, and incident resolution in production environments, ensuring high availability and system stability.",
    "experience.job2.title": "DevOps Engineer",
    "experience.job2.company": "Banco Estado",
    "experience.job2.period": "Jun 2021 - Jun 2023",
    "experience.job2.resp1": "DevOps Engineer at Banco Estado, participating in CI/CD process automation through GitLab pipelines.",
    "experience.job2.resp2": "Creation, maintenance, and administration of AWS environments using IaC tools like Terraform and Ansible.",
    "experience.job2.resp3": "Part of the operations unit for the bank's mobile application serving 8 million customers.",
    "experience.job2.resp4": "My role was to maintain service operational continuity, analyzing errors, generating improvements, and resolving daily incidents.",

    // Certifications
    "certifications.label": "Professional Credentials",
    "certifications.title": "Certifications",
    "certifications.description": "Official validation of competencies and knowledge in cloud and DevOps technologies",
    "certifications.aws.title": "AWS Certified Solutions Architect",
    "certifications.aws.level": "Associate",
    "certifications.aws.issuer": "Amazon Web Services (AWS)",
    "certifications.aws.valid": "Valid",
    "certifications.skills.label": "Validated competencies:",
    "certifications.skill1": "Design of resilient architectures",
    "certifications.skill2": "High-performance architectures",
    "certifications.skill3": "Secure architectures",
    "certifications.skill4": "Cost-optimized architectures",
    "certifications.verify": "Verify credential",

    // Education
    "education.label": "Academic Background",
    "education.title": "Education",
    "education.description": "Solid academic foundation in infrastructure and platform technologies",
    "education.degree": "Engineering in Infrastructure and Technology Platforms",
    "education.institution": "DUOC UC",
    "education.period": "2016 - 2019",
    "education.location": "Chile",
    "education.desc": "Comprehensive training in design, implementation, and management of technology infrastructures, including networks, operating systems, virtualization, and information security.",
    "education.highlight1": "Linux and Windows systems administration",
    "education.highlight2": "Virtualization and cloud computing",
    "education.highlight3": "Networks and telecommunications",
    "education.highlight4": "Information security",

    // Contact
    "contact.label": "Let's talk",
    "contact.title": "Contact",
    "contact.description": "Do you have a project in mind or looking to improve your cloud infrastructure? I'm available for new opportunities",
    "contact.info.title": "Contact Information",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.link": "Link",
    "contact.linkedin": "LinkedIn",
    "contact.github": "GitHub",
    "contact.gitlab": "GitLab",
    "contact.coming_soon": "Coming soon",
    "contact.location.title": "Location",
    "contact.location.city": "Santiago, Chile",
    "contact.location.remote": "Available for remote work",
    "contact.form.title": "Send Message",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "How can I help you?",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Tell me about your project...",
    "contact.form.submit": "Send Message",

    // Footer
    "footer.role": "DevOps / DevSecOps Engineer",
    "footer.copyright": "All rights reserved.",
    "footer.made": "Made with",
    "footer.by": "by",
    "footer.in": "in Chile",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "es" || saved === "en")) {
      setLanguageState(saved)
      document.documentElement.lang = saved
      return
    }

    document.documentElement.lang = "en"
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
    document.documentElement.lang = lang
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.es] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
