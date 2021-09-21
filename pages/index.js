import ProjectCard from "../components/cards/ProjectCard";
import SkillCard from "../components/cards/SkillCard";
import HeroHome from "../components/hero/HeroHome";

export default function Home() {
  return (
    <div>
      <HeroHome />

      {/* About Me */}


      {/* Skills */}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
           <SkillCard />
           <SkillCard />
           <SkillCard />
           <SkillCard />
        </div>
      </div>

      {/* Projects */}
      <div class="container my-12 mx-auto px-4 md:px-12">
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
           <ProjectCard />
           <ProjectCard />
           <ProjectCard />
        </div>
      </div>
    </div>
  );
}
  