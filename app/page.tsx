import { PageShell } from "@/components/layout/PageShell";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { NavBar } from "@/components/navigation/NavBar";
import { ContactSection, type GithubProfile } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProficiencySection } from "@/components/sections/ProficiencySection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";



export default async function Home() {

  return (
    <PageShell>
      <NavBar />
      <HeroSection />
      <SectionWrapper id="skills" num="02">
        <SkillsSection />
      </SectionWrapper>
      <SectionWrapper id="proficiency" num="03">
        <ProficiencySection />
      </SectionWrapper>
      <SectionWrapper id="education" num="04">
        <EducationSection />
      </SectionWrapper>
      <SectionWrapper id="experience" num="05">
        <ExperienceSection />
      </SectionWrapper>
      {/* <SectionWrapper id="testimonials" num="07">
        <TestimonialsSection />
      </SectionWrapper> */}
      <SectionWrapper id="projects" num="06">
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper id="contact" num="07">
        <ContactSection />
      </SectionWrapper>
    </PageShell>
  );
}
