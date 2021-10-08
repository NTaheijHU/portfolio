import { useState } from "react";

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
                    <input id="naam" onChange={ handleNameChange } maxLength="50" className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-4 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 border-red-500" type="text" placeholder="Naam" required />
                  </div>
                  <div className="p-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={ handleEmailChange } className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-4 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 border-red-500" type="email" placeholder="Email Adres" required />
                  </div>
                  <div className="p-3">
                    	<label htmlFor="telefoonnummer">Telefoonnummer</label>
                    <input id="telefoonnummer" onChange={ handlePhoneChange } className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-4 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 border-red-500" type="text" placeholder="Telefoon Nummer" />
                  </div>
                  <div className="p-3">
                    <label htmlFor="bericht">Bericht</label>
                    <textarea id="bericht" onChange={ handleMessageChange } maxLength="2000" className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56 border-red-500" placeholder="Bericht" required></textarea>
                    <p id="bericht-max" className="text-xl mt-2 mb-0">Karakters: 0/2000</p>
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

function handleNameChange(event) {
  let name = event.target.value;

  if ( name.length > 4 && name.length < 50 ) {
    event.target.classList.remove('border-red-500');
  }
  else {
    event.target.classList.add('border-red-500');
  }
}

function handleEmailChange(event) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = event.target.value;

  if ( re.test(email) ) {
    event.target.classList.remove('border-red-500');
  }
  else {
    event.target.classList.add('border-red-500');
  }
}

function handlePhoneChange(event) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let email = event.target.value;

  if ( re.test(email) ) {
    event.target.classList.remove('border-red-500');
  }
  else {
    event.target.classList.add('border-red-500');
  }
}

function handleMessageChange(event) {
  let message = event.target.value;
  let messageLength = message.length;

  document.getElementById('bericht-max').innerHTML = 'Karakters: ' + messageLength + '/2000';

  console.log(messageLength);

  if(messageLength > 2000) {
    event.target.value = message.slice(0, 2000-1);
  }
}

export default ContactCard;