import ProjectCard from "../components/cards/ProjectCard";
import SkillCard from "../components/cards/SkillCard";
import HeroHome from "../components/hero/HeroHome";

import {
  PopInWhenVisible,
  SlideUpCardWhenVisible,
} from "../components/effects/DisplayWhenVisible";

export default function Home() {
  return (
    <div>
      <HeroHome />

      {/* About Me */}


      {/* Skills */}
      <div className="container my-12 mx-auto px-4 md:px-12" id="skills">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.0"
            duration="0.4"
          >
            <SkillCard />
          </PopInWhenVisible> 
          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.2"
            duration="0.4"
          >
            <SkillCard />
          </PopInWhenVisible> 

          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.4"
            duration="0.4"
          >
            <SkillCard />
          </PopInWhenVisible> 

          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.6"
            duration="0.4"
          >
            <SkillCard />
          </PopInWhenVisible> 
        </div>
      </div>

      {/* Projects */}
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <SlideUpCardWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            delay="0.0"
          >
           <ProjectCard />
          </SlideUpCardWhenVisible>

          <SlideUpCardWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            delay="0.2"
          >
           <ProjectCard />
          </SlideUpCardWhenVisible>

          <SlideUpCardWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            delay="0.4"
          >
           <ProjectCard />
          </SlideUpCardWhenVisible>
        </div>
      </div>
    </div>
  );
}
  