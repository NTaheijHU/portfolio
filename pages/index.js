import ProjectCard from "../components/cards/home/ProjectCard";
import SkillCard from "../components/cards/home/SkillCard";
import ReviewCard from "../components/cards/home/ReviewCard";
import InfoCard from "../components/cards/home/InfoCard";
import HeroHome from "../components/hero/HeroHome";

import skillsInfo from '../data/skills.json';
import projectInfo from '../data/projects.json';
import reviewInfo from '../data/reviews.json';

import {
  PopInWhenVisible,
  SlideUpCardWhenVisible,
  SlideRightCardWhenVisible
} from "../components/effects/DisplayWhenVisible";

export function Home(props) {

  let animIterSkills = 0;
  let animIterProjects = 0;
  let animIterReviews = 4;

  return (
    <div className="bg-gray-200 bg-opacity-60">
      <HeroHome />
      {/* About Me */}
      <div id="about-me">
        <br />
        <div className="container mb-12 mt-16 md:mt-20 mx-auto px-2 md:px-4">
            <InfoCard />
        </div>
      </div>

      {/* Skills */}
      <div id="skills">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Skills</h1>

        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
          { props.skillsInfo.length == 0 &&
              <div className="text-red-500 ml-2 mt-2 md:mt-4 mb-8">
                <p className="text-center text-3xl md:text-4xl">Geen skills gevonden.</p>
              </div>
          }
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
          { props.skillsInfo.length > 0 &&
            props.skillsInfo.map((skill) => {
              animIterSkills++;

              return(
              <PopInWhenVisible
                key={skill.name + "-anim" }
                classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                delay={animIterSkills * 0.2 }
                duration={0.4}
              >
                <SkillCard 
                  key={skill.name + "-card" }
                  title={skill.name}
                  experience={skill.experience}
                  useTime={skill.useTime}
                  link="/over-mij"
                />
              </PopInWhenVisible> 
              )
            })
          }
          </div>
        </div>
      </div>

      {/* Projects */}
      <div id="projects">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Projecten</h1>
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
          { props.projectInfo.length == 0 &&
              <div className="text-red-500 ml-2 mt-2 md:mt-4 mb-8">
                <p className="text-center text-3xl md:text-4xl">Geen projecten gevonden.</p>
              </div>
          }
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            { props.projectInfo.length > 0 &&
              props.projectInfo.slice(0, 3).map((project) => {
                animIterProjects++;

                return(
                  <SlideUpCardWhenVisible
                  key={project.name + "-anim" }
                  classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
                  delay={animIterProjects * 0.2}
                  >
                    <ProjectCard 
                      key={project.name + "-card" }
                      image={project.image}
                      title={project.name}
                      text={project.shortDescription}
                      link={project.link}
                      githubLink={project.githubLink}
                      websiteLink={project.websiteLink}
                    />
                  </SlideUpCardWhenVisible>
                )
              })
            }
          </div>
        </div>
        <PopInWhenVisible
              classes="grid justify-items-center"
              delay="0.0"
              duration="0.4"
              top="0"
        >
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-6 px-6 rounded-lg">
            Bekijk meer projecten
          </button>
        </PopInWhenVisible>
      </div>
      
      {/* Reviews */}
      <div id="reviews">
        <br />
        <h1 className="text-6xl font-bold text-center mt-16 md:mt-20 text-blue-600">Mijn Reviews</h1>
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
            { props.reviewInfo.length == 0 &&
              <div className="text-red-500 ml-2 mt-2 md:mt-4 mb-8">
                <p className="text-center text-3xl md:text-4xl">Geen reviews gevonden.</p>
              </div>
            }
            <div className="flex flex-wrap -mx-1 lg:-mx-4">
            { props.reviewInfo.length > 0 &&
              props.reviewInfo.slice(0, 4).map((review) => {
                animIterReviews--;
                return(
                  <SlideRightCardWhenVisible
                      key={review.name + "-anim" }
                      classes="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4"
                      delay={animIterReviews * 0.2}
                  >
                    <ReviewCard 
                    key={review.name + "-card" }
                    image={review.image}
                    quote={review.quote}
                    name={review.name}
                    company={review.title}
                    />
                  </SlideRightCardWhenVisible>
                )
              })
    }
            </div>
          </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { reviewInfo, projectInfo, skillsInfo },
  }
}

export default Home;
  