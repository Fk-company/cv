
  // config.js — الإعدادات والبيانات الثابتة (يعمل على كل الأجهزة)
var SITE_CONFIG = {
  sheetsApi: "https://script.google.com/macros/s/AKfycbww_STDxUuDfFcj8BlcctpDLvSNwi-VutFXYLLDQXwmeilRpjlbs8Bq5duIv70W1ll8Cw/exec",
  accentColor: "#38bdf8",
  bgDark: "#0f172a",
  siteName: "Alex Morgan",
  cvLink: "#",
  // بيانات حقيقية تظهر على كل الأجهزة:
  profile: {
    name: "Alex Morgan",
    image: "https://picsum.photos/seed/alexdev/400/400.jpg",
    greeting: "Hello, I'm",
    titles: ["Full-Stack Developer", "UI/UX Designer", "AI Engineer", "Problem Solver"],
    about: "I'm a passionate full-stack developer with over 5 years of experience building modern web applications and AI-powered solutions.",
    aboutFull: "I specialize in creating elegant, performant, and user-friendly digital experiences.\n\nThroughout my career, I've worked with startups and enterprises alike, building everything from AI-powered chatbots to large-scale e-commerce platforms. I'm constantly learning and exploring new technologies to stay at the cutting edge of web development.",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    stats: { years: "5+", projects: "50+", clients: "30+", awards: "8+" },
    social: { github: "https://github.com", linkedin: "https://linkedin.com", twitter: "https://twitter.com", dribbble: "https://dribbble.com", instagram: "", youtube: "", facebook: "" }
  },
  projects: [
    { title: "E-Commerce Platform", category: "web", image: "https://picsum.photos/seed/ecom42/600/400.jpg", description: "Full-featured online store with payment integration.", link: "#", tech: ["React","Node.js","MongoDB"] },
    { title: "AI Chat Assistant", category: "web", image: "https://picsum.photos/seed/aichat99/600/400.jpg", description: "Intelligent conversational AI with NLP.", link: "#", tech: ["Python","TensorFlow","FastAPI"] },
    { title: "Brand Identity", category: "design", image: "https://picsum.photos/seed/brand77/600/400.jpg", description: "Complete visual identity design.", link: "#", tech: ["Figma","Illustrator"] },
    { title: "SaaS Dashboard", category: "web", image: "https://picsum.photos/seed/dash55/600/400.jpg", description: "Analytics dashboard with real-time data.", link: "#", tech: ["Vue.js","D3.js","Express"] },
    { title: "Social App", category: "mobile", image: "https://picsum.photos/seed/soc33/600/400.jpg", description: "Social networking with real-time messaging.", link: "#", tech: ["Flutter","Firebase"] },
    { title: "Portfolio Template", category: "design", image: "https://picsum.photos/seed/tmpl99/600/400.jpg", description: "Premium portfolio with multiple layouts.", link: "#", tech: ["Figma","CSS3"] }
  ],
  skills: [
    { name: "JavaScript", level: 95, icon: "fa-brands fa-js", category: "frontend" },
    { name: "React", level: 90, icon: "fa-brands fa-react", category: "frontend" },
    { name: "Node.js", level: 88, icon: "fa-brands fa-node-js", category: "backend" },
    { name: "Python", level: 82, icon: "fa-brands fa-python", category: "backend" },
    { name: "Figma", level: 85, icon: "fa-brands fa-figma", category: "design" },
    { name: "TensorFlow", level: 78, icon: "fa-solid fa-brain", category: "ai" },
    { name: "Vue.js", level: 80, icon: "fa-brands fa-vuejs", category: "frontend" },
    { name: "Docker", level: 75, icon: "fa-brands fa-docker", category: "cloud" }
  ],
  experience: [
    { year: "2022 - Present", title: "Senior Full-Stack Developer", company: "TechVision Inc.", description: "Leading development of enterprise web applications." },
    { year: "2020 - 2022", title: "Full-Stack Developer", company: "Digital Craft Studio", description: "Built multiple client projects." },
    { year: "2018 - 2020", title: "Frontend Developer", company: "Creative Web Agency", description: "Developed responsive web interfaces." },
    { year: "2017 - 2018", title: "Junior Developer", company: "StartUp Hub", description: "Built MVPs for early-stage startups." }
  ],
  testimonials: [
    { name: "Sarah Johnson", role: "CEO, TechVision", text:
