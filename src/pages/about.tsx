import { useState } from "react";
import { Hero } from "../components/about/hero";
import { Card } from "../components/card";
import { Link } from "react-router";

export default function About() {
  const [language, setLanguage] = useState<"en" | "fa">("en");

  const content = {
    en: {
      title: "About WorldMap",
      subtitle:
        "Explore the world through an elegant, interactive mapping experience",
      appTitle: "The Application",
      appDesc:
        "WorldMap is a modern, interactive mapping platform that allows you to explore countries, cities, and geographic data with ease. Built with precision and attention to detail, it provides a seamless experience for travelers, researchers, and geography enthusiasts.",
      features: [
        "Interactive world map visualization",
        "Detailed country and city information",
        "Search and filter capabilities",
        "Responsive design for all devices",
      ],
      aboutMeTitle: "About the Creator",
      name: "Matin",
      experience: "4+ years of professional experience",
      passion:
        "Passionate about creating functional and beautiful applications",
      description:
        "I'm a dedicated frontend developer with a keen eye for design and a commitment to writing clean, maintainable code. Over the past four years, I've worked on diverse projects ranging from e-commerce platforms to data visualization tools. My goal is to build applications that not only work flawlessly but also delight users with their aesthetics and usability.",
      techStack: "Built with React, TypeScript, Vite, and Tailwind CSS",
      cta: "Start Exploring",
    },
    fa: {
      title: "درباره نقشه جهان",
      subtitle: "کاوش در جهان با تجربه‌ای مدرن و تعاملی",
      appTitle: "برنامه",
      appDesc:
        "نقشه جهان یک پلتفرم مدرن و تعاملی برای نقشه‌برداری است که به شما امکان می‌دهد کشورها، شهرها و داده‌های جغرافیایی را به راحتی کاوش کنید. این برنامه با دقت و توجه به جزئیات ساخته شده است و تجربه‌ای بی‌نقص برای مسافران، پژوهشگران و علاقه‌مندان به جغرافیا فراهم می‌کند.",
      features: [
        "نمایش تعاملی نقشه جهان",
        "اطلاعات دقیق کشورها و شهرها",
        "قابلیت جستجو و فیلتر",
        "طراحی پاسخگو برای تمام دستگاه‌ها",
      ],
      aboutMeTitle: "درباره سازنده",
      name: "متین",
      experience: "بیش از ۴ سال تجربه حرفه‌ای",
      passion: "علاقه‌مند به ساخت برنامه‌های کاربردی و زیبا",
      description:
        "من یک توسعه‌دهنده فرانت‌اند هستم با چشمی دقیق به طراحی و تعهد به نوشتن کد تمیز و قابل نگهداری. در چهار سال گذشته، روی پروژه‌های متنوعی از پلتفرم‌های تجارت الکترونیک تا ابزارهای可视化 داده کار کرده‌ام. هدف من ساخت برنامه‌هایی است که نه تنها بی‌نقص کار کنند، بلکه کاربران را با زیبایی و کاربردپذیری خود شگفت‌زده کنند.",
      techStack: "ساخته شده با React، TypeScript، Vite و Tailwind CSS",
      cta: "شروع کاوش",
    },
  };

  const current = content[language];

  return (
    <div
      className="min-h-screen bg-background"
      dir={language === "fa" ? "rtl" : "ltr"}
    >
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-10 flex gap-2">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
            language === "en"
              ? "bg-primary text-white shadow-md"
              : "bg-surface text-text-secondary hover:bg-surface-hover border border-border"
          }`}
        >
          English
        </button>
        <button
          onClick={() => setLanguage("fa")}
          className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
            language === "fa"
              ? "bg-primary text-white shadow-md"
              : "bg-surface text-text-secondary hover:bg-surface-hover border border-border"
          }`}
        >
          فارسی
        </button>
      </div>

      {/* Hero Section */}
      <Hero title={current.title} subtitle={current.subtitle} />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* App Description Card */}
          <Card title={current.appTitle}>
            <p className="text-text-secondary leading-relaxed mb-6">
              {current.appDesc}
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {current.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* About Me Card */}
          <Card title={current.aboutMeTitle}>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shadow-md">
                <span className="text-white text-2xl font-bold">
                  {current.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  {current.name}
                </h3>
                <p className="text-primary font-medium">{current.experience}</p>
                <p className="text-text-tertiary text-sm">{current.passion}</p>
              </div>
            </div>
            <p className="text-text-secondary leading-relaxed mb-4">
              {current.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
              {current.techStack.split(" ").map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-background text-text-secondary text-sm rounded-full border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>

          {/* CTA Section */}
          <div className="text-center py-8">
            <Link
              to="/app"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-light transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              {current.cta}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
