import { skillsCarousel } from "@/data/skillsCarousel";
import { Icon } from "@iconify/react";

export default function SkillsCarousel() {
  // Duplicate the list so the animation can loop seamlessly
  const items = [...skillsCarousel, ...skillsCarousel];

  return (
    <div className="w-full overflow-hidden">
      <div className="skills-carousel flex w-max gap-4 hover:[animation-play-state:paused]">
        {items.map((skill, index) => (
          <div
            key={`${skill.skillName}-${index}`}
            className="
              flex
              min-w-[150px]
              items-center
              gap-3
              rounded-xl
              border
              border-neutral-800
              bg-neutral-900/70
              px-5
              py-3
              transition-all
              duration-300
              hover:border-neutral-600
              hover:bg-neutral-800
            "
          >
            <Icon
              icon={skill.iconifyTag}
              className="h-7 w-7 shrink-0"
            />

            <span className="whitespace-nowrap text-sm font-medium text-neutral-200">
              {skill.skillName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}