function ContactCard(props) {
  return ( 
    <div>
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
            <div className="lg:mt-4 lg:mx-4">
              <h2 className="uppercase font-medium text-3xl lg:text-4xl mb-3">{props.title}</h2>
              <div className="flex justify-center mx-auto bg-gray-200 rounded-lg shadow-lg">
                <form action="#" type="POST" className="w-full">
                  <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Naam" required />
                  </div>
                  <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email Adres" required />
                  </div>
                  <div className="p-3">
                    <input className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Telefoon Nummer" required />
                  </div>
                  <div className="p-3">
                    <textarea className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Message" required></textarea>
                  </div>
                  <div className="p-3 pt-4">
                  <button className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded text-2xl">
                  Send
                  </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mx-4 lg:my-4 lg:mt-4 lg:col-span-1 h-2/3 bg-gray-200 rounded-lg shadow-lg px-2 pt-2">
            {/* TODO: Make Better Looking */}
            <h2 className="font-medium text-xl lg:text-2xl mb-3">Algemene Informatie</h2>
            <div className="flex flex-row gap-2 items-center mb-0">
              <a href="https://instagram.com/ntaheij" target="_blank"><i className="fab fa-instagram fa-2x hover:text-blue-800 duration-200 ease-in-out"></i></a>
              <a href="https://facebook.com/ntaheij" target="_blank"><i className="fab fa-facebook fa-2x hover:text-blue-800 duration-200 ease-in-out"></i></a>
              <a href="https://twitter.com/ntaheij" target="_blank"><i className="fab fa-twitter fa-2x hover:text-blue-800 duration-200 ease-in-out"></i></a>
              <a href="https://linkedin.com/in/ntaheij" target="_blank"><i className="fab fa-linkedin fa-2x hover:text-blue-800 duration-200 ease-in-out"></i></a>
              <a href="https://github.com/ntaheij" target="_blank"><i className="fab fa-github fa-2x hover:text-blue-800 duration-200 ease-in-out"></i></a>
            </div>

            <h3 className="font-semibold mt-4">Adres (Alleen op afspraak)</h3>
            <div className="ml-2">
              <p>Lorem Straat 245</p>
              <p>Ammerstol</p>
              <p>2865XN</p>
              <p>Nederland</p>
            </div>
          </div>
        </div>
      </section>
    </div>
   );
}

export default ContactCard;