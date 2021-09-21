import ProjectCard from "../components/cards/ProjectCard";
import SkillCard from "../components/cards/SkillCard";
import ReviewCard from "../components/cards/ReviewCard";
import HeroHome from "../components/hero/HeroHome";

import {
  PopInWhenVisible,
  SlideUpCardWhenVisible,
  SlideRightCardWhenVisible
} from "../components/effects/DisplayWhenVisible";

export default function Home() {
  return (
    <div>
      <HeroHome />
      {/* About Me */}


      {/* Skills */}
      <div id="skills">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Skills</h1>

        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              delay="0.0"
              duration="0.4"
            >
              <SkillCard 
                title="Skill 1"
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
                title="Skill 1"
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
                title="Skill 1"
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
                title="Skill 1"
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
                title="Skill 1"
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
                title="Skill 1"
                experience="Ervaren"
                useTime="3"
                link="/over-mij#skill-1"
              />
            </PopInWhenVisible> 
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              delay="0.8"
              duration="0.4"
            >
              <SkillCard 
                title="Skill 1"
                experience="Ervaren"
                useTime="3"
                link="/over-mij#skill-1"
              />
            </PopInWhenVisible> 
            <PopInWhenVisible
              classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
              delay="1.0"
              duration="0.4"
            >
              <SkillCard 
                title="Skill 1"
                experience="Ervaren"
                useTime="3"
                link="/over-mij#skill-1"
              />
            </PopInWhenVisible> 
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Projecten</h1>
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
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
        <div className="grid justify-items-center">
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-6 px-6 rounded-lg">
            Bekijk meer projecten
          </button>
        </div>
      </div>
      {/* Reviews */}
      <div id="reviews">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Reviews</h1>
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
              <SlideRightCardWhenVisible
                  classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                  delay="0.6"
              >
                <ReviewCard 
                image="https://picsum.photos/96/96/?random"

                quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
                name="Developer Proj"
                company="Software Engineer"
                />
              </SlideRightCardWhenVisible>
              <SlideRightCardWhenVisible
                  classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                  delay="0.4"
              >
                <ReviewCard 
                image="https://picsum.photos/96/96/?random"

                quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
                name="Developer Proj"
                company="Software Engineer"
                />
              </SlideRightCardWhenVisible>
              <SlideRightCardWhenVisible
                  classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                  delay="0.2"
              >
                <ReviewCard 
                image="https://picsum.photos/96/96/?random"

                quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
                name="Developer Proj"
                company="Software Engineer"
                />
              </SlideRightCardWhenVisible>
              <SlideRightCardWhenVisible
                  classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                  delay="0.0"
              >
                <ReviewCard 
                image="https://picsum.photos/96/96/?random"

                quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur optio magnam perferendis blanditiis labore aliquam omnis culpa repellat, cum similique vitae? Distinctio, minima deleniti placeat veniam amet dolores corporis."
                name="Developer Proj"
                company="Software Engineer"
                />
              </SlideRightCardWhenVisible>
            </div>
          </div>
      </div>
    </div>
  );
}
  