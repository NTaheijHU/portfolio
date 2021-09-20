export default function LinkFooter() {
  return (
    <div className="bg-gray-900 font-semibold text-gray-50 text-lg text-center md:text-left">
      <div className="lg:px-0 px-4 max-w-7xl mx-auto py-8">
        <div className="w-full flex flex-col sm:flex-row gap-2 justify-start">
          <div className="w-full md:w-1/4 flex flex-col gap-4 footer-panel md:items-start items-center">
            <h2 className="sm:pb-4 text-3xl">Lokalized</h2>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="tel:+31850150016">+31 (0)85 015 0016</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="mailto:info@lokalized.nl">info@ntaheij.dev</a>
            <div className="flex flex-row gap-2 items-center">
              <i className="fab fa-instagram hover:text-gray-300 duration-200 ease-in-out"></i>
              <i className="fab fa-facebook hover:text-gray-300 duration-200 ease-in-out"></i>
              <i className="fab fa-twitter hover:text-gray-300 duration-200 ease-in-out"></i>
              <i className="fab fa-linkedin-in hover:text-gray-300 duration-200 ease-in-out"></i>
              <i className="fab fa-github hover:text-gray-300 duration-200 ease-in-out"></i>
            </div>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-4 pb-2 footer-panel">
            <h2 className="sm:pb-4 text-3xl">Over Mij</h2>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="over-mij">Informatie</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="over-mij#skills">Skills</a>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-4 footer-panel">
            <h2 className="sm:pb-4 text-3xl">Portfolio</h2>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="projects/1">Project 1</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="projects/2">Project 2</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="projects/3">Project 3</a>
          </div>
          <div className="w-full md:w-1/4 flex flex-col gap-4 pb-2 footer-panel">
            <h2 className="sm:pb-4 text-3xl">Links</h2>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="contact">Contact</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="reviews">Reviews</a>
            <a className="opacity-90 hover:text-gray-300 duration-200 ease-in-out" href="portal">Portaal</a>
          </div>
        </div>
        <div className="opacity-90 pt-4">
          <p>© NTaheij.dev 2020-2021</p>
        </div>
      </div>
    </div>
  )
}