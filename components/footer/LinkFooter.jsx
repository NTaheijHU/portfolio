import Link from "next/link";
import projectInfo from '../../data/projects.json';

export default function LinkFooter() {
  return (
    <div className="bg-gray-900 font-semibold text-gray-50 text-lg text-center md:text-left">
      <div className="lg:px-0 px-4 max-w-7xl mx-auto py-8">
        <div className="w-full flex flex-col sm:flex-row gap-2 justify-start">
          <div className="w-full md:w-1/4 flex flex-col gap-4 footer-panel md:items-start items-center">
            <h2 className="sm:pb-4 text-3xl">Noah Taheij</h2>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="tel:+31850150016">+31 (0)85 015 0016</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="mailto:info@ntaheij.dev">info@ntaheij.dev</a>
            <div className="flex flex-row gap-2 items-center">
              <Link href="https://instagram.com/ntaheij"><a target="_blank"><i className="fab fa-instagram hover:text-gray-300 duration-200 ease-in-out"></i></a></Link>
              <Link href="https://facebook.com/ntaheij"><a target="_blank"><i className="fab fa-facebook hover:text-gray-300 duration-200 ease-in-out"></i></a></Link>
              <Link href="https://twitter.com/ntaheij" ><a target="_blank"><i className="fab fa-twitter hover:text-gray-300 duration-200 ease-in-out"></i></a></Link>
              <Link href="https://linkedin.com/in/ntaheij"><a target="_blank"><i className="fab fa-linkedin hover:text-gray-300 duration-200 ease-in-out"></i></a></Link>
              <Link href="https://github.com/ntaheij"><a target="_blank"><i className="fab fa-github hover:text-gray-300 duration-200 ease-in-out"></i></a></Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-4 pb-2 footer-panel">
            <h2 className="sm:pb-4 text-3xl">Over Mij</h2>
            <Link href="/over-mij"><a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out">Informatie</a></Link>
            <Link href="/over-mij#skills"><a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out">Skills</a></Link>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-4 footer-panel">
            <h2 className="sm:pb-4 text-3xl">Portfolio</h2>
            {
              projectInfo.slice(0, 3).map((project) => {
                return (
                  <Link href={project.link}><a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out"
                  key={project.name}
                  >{project.name}</a></Link>
                )
              })
            }
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-4 pb-2 footer-panel">
            <h2 className="sm:pb-4 text-3xl">Links</h2>
            <Link href="/contact"><a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out">Contact</a></Link>
            <Link href="/reviews"><a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out">Reviews</a></Link>
            <Link href="/portal"><a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out">Portaal</a></Link>
          </div>
        </div>
        <div className="opacity-90 pt-4">
          <p>© NTaheij.dev 2020-2021</p>
        </div>
      </div>
    </div>
  )
}