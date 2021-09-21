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
      <div id="skills">
        <br />
      </div>
      {/* About Me */}


      {/* Skills */}
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.0"
            duration="0.4"
          >
            <SkillCard 
              title="Project 1"
              experience="Ervaren"
              useTime="3"
              link="/over-mij#skill-1"
            />
          </PopInWhenVisible> 
          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.2"
            duration="0.4"
          >
             <SkillCard 
              title="Project 1"
              experience="Ervaren"
              useTime="3"
              link="/over-mij#skill-1"
            />
          </PopInWhenVisible> 

          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.4"
            duration="0.4"
          >
             <SkillCard 
              title="Project 1"
              experience="Ervaren"
              useTime="3"
              link="/over-mij#skill-1"
            />
          </PopInWhenVisible> 

          <PopInWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
            delay="0.6"
            duration="0.4"
          >
             <SkillCard 
              title="Project 1"
              experience="Ervaren"
              useTime="3"
              link="/over-mij#skill-1"
            />
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
           <ProjectCard 
            image="https://picsum.photos/600/400/?random"
            title="Project 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis.&nbsp;"
            link="/projects/1"
            githubLink="https://github.com/ntaheij/project1"
            websiteLink="https://ntaheij.github.io/project1"
           />
          </SlideUpCardWhenVisible>

          <SlideUpCardWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            delay="0.2"
          >
           <ProjectCard 
            image="https://picsum.photos/600/400/?random"
            title="Project 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis.&nbsp;"
            link="/projects/1"
            githubLink="https://github.com/ntaheij/project1"
            websiteLink="https://ntaheij.github.io/project1"
           />
          </SlideUpCardWhenVisible>

          <SlideUpCardWhenVisible
            classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
            delay="0.4"
          >
           <ProjectCard 
            image="https://picsum.photos/600/400/?random"
            title="Project 1"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis.&nbsp;"
            link="/projects/1"
            githubLink="https://github.com/ntaheij/project1"
            websiteLink="https://ntaheij.github.io/project1"
           />
          </SlideUpCardWhenVisible>
        </div>
      </div>
    </div>
  );
}
  