function ContactCard(props) {
  return ( 
    <div>
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
        <div className="lg:relative m-0">
            <div className="lg:my-4 lg:mx-4">
              <h2 className="uppercase font-medium text-3xl lg:text-4xl mb-3">{props.title}</h2>
              <div className="flex justify-center mx-auto bg-gray-200 rounded-lg shadow-lg">
                <form action="#" type="POST" className="w-full">
                  <div className="p-3">
                    <label htmlFor="naam">Naam</label>
                    <input id="naam" className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Naam" required />
                  </div>
                  <div className="p-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email Adres" required />
                  </div>
                  <div className="p-3">
                    	<label htmlFor="telefoonnummer">Telefoonnummer</label>
                    <input id="telefoonnummer"className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Telefoon Nummer" />
                  </div>
                  <div className="p-3">
                    <label htmlFor="bericht">Bericht</label>
                    <textarea id="bericht" className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Bericht" required></textarea>
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
      </section>
    </div>
   );
}

export default ContactCard;