import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useRef, useState } from "react";

function ContactCard(props) {
  const captchaRef = useRef(null);

  const handleEmail = async (token) => {

    await fetch('http://dev.local:5000' + '/mail', {
      method: 'POST',
      headers: {
        'User-Agent': 'NTaheij Mailer',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
        token: token
      })
    }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert('Bericht verzonden');
  
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
      } else {
        alert('Er is iets fout gegaan');
      }

      captchaRef.current.resetCaptcha();
      setToken(null);
    });
  
    return true;
  }

  return ( 
    <div>
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
        <div className="lg:relative m-0">
            <div className="lg:my-4 lg:mx-4">
              <h2 className="uppercase font-medium text-3xl lg:text-4xl mb-3">{props.title}</h2>
              <div className="flex justify-center mx-auto bg-gray-200 rounded-lg shadow-lg">
                <form className="w-full">
                  <div className="p-3">
                    <label htmlFor="name">Naam</label>
                    <input id="name" onChange={ handleNameChange } maxLength="50" className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-4 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 border-red-500" type="text" placeholder="Naam" required />
                  </div>
                  <div className="p-3">
                    <label htmlFor="email">Email</label>
                    <input id="email" onChange={ handleEmailChange } className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-4 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 border-red-500" type="email" placeholder="Email Adres" required />
                  </div>
                  <div className="p-3">
                    	<label htmlFor="phone">Telefoonnummer</label>
                    <input id="phone" onChange={ handlePhoneChange } className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-4 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 border-red-500" type="text" placeholder="Telefoon Nummer" />
                  </div>
                  <div className="p-3">
                    <label htmlFor="message">Bericht</label>
                    <textarea id="message" onChange={ handleMessageChange } maxLength="2000" className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56 border-red-500" placeholder="Bericht" required></textarea>
                    <p id="message-max" className="text-xl mt-2 mb-0">Karakters: 0/2000</p>
                  </div>
                  <div className="p-3 pt-2">
                  <HCaptcha
                    sitekey="19dfcbb1-b179-4c73-8a56-46a2cb26dea9"
                    onVerify={ (token) => { handleEmail(token); }}
                    ref={captchaRef}
                  />
                  {/* { token &&
                    <button type="button" onClick={ handleEmail } className="w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-3 px-4 mt-4 rounded text-2xl">
                      Send
                    </button>
                  } */}
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

  if(messageLength > 2000) {
    event.target.value = message.slice(0, 2000-1);
    return;
  }

  document.getElementById('message-max').innerHTML = 'Karakters: ' + messageLength + '/2000';
}

export default ContactCard;