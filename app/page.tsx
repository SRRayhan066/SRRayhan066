import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProfileCard } from "@/components/profile-card";
import { StackPanel } from "@/components/stack-panel";
import { StatsPanel } from "@/components/stats-panel";
import { LearningPanel } from "@/components/learning-panel";
import { ExperienceSection } from "@/components/experience-section";
import { EducationPanel } from "@/components/education-panel";
import { CertificationsPanel } from "@/components/certifications-panel";
import { ResumePanel } from "@/components/resume-panel";
import { ProjectsSection } from "@/components/projects-section";
import { ArticlesSection } from "@/components/articles-section";
import { TerminalShell } from "@/components/terminal-shell";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-330 px-5 pt-7 pb-15">
      <Header />
      <main className="grid grid-cols-1 items-stretch gap-3.5 lg:grid-cols-12">
        <HeroSection />
        <ProfileCard />
        <StackPanel />
        <StatsPanel />
        <LearningPanel />
        <ExperienceSection />
        <div className="flex flex-col gap-3.5 lg:col-span-5">
          <EducationPanel />
          <CertificationsPanel />
          <ResumePanel />
        </div>
        <ProjectsSection />
        <ArticlesSection />
        <TerminalShell />
        <ContactSection />
      </main>
      <Footer />
      <ScrollReveal />
    </div>
  );
}
