import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useEffect, useRef, useState } from "react";

function ContactCard(props) {
  const captchaRef = useRef(null);

  const [dark, setDark] = useState("light");

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark("dark");
    } else {
      setDark("light");
    }
  })

  const handleEmail = async (token) => {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;

    if(name.length < 5 || name.length > 50) {
      captchaRef.current.resetCaptcha();
      return alert("Het bericht is niet verzonden, de naam is niet correct.");
    }

    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    if (!re.test(email) ) {
      captchaRef.current.resetCaptcha();
      return alert("Het bericht is niet verzonden, het email adres is niet correct.");
    }

    let reP = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  
    if (!reP.test(phone) ) {
      captchaRef.current.resetCaptcha();
      return alert("Het bericht is niet verzonden, het telefoonnummer is niet correct.");
    }

    if(message.length > 2000) {
      captchaRef.current.resetCaptcha();
      return alert("Het bericht is niet verzonden, het bericht is te lang.");
    }


    await fetch(props.endpoint + '/mail', {
      method: 'POST',
      headers: {
        'User-Agent': 'NTaheij Mailer',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        token: token
      })
    }).then((response) => {
      console.log(response);
      if (response.status === 201) {
        alert('Bericht verzonden');
  
        name = '';
        email = '';
        phone = '';
        message = '';
      } else {
        alert('Er is iets fout gegaan');
      }

      captchaRef.current.resetCaptcha();
    });
  
    return true;
  }

  return ( 
    <div>
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-100 mt-2 md:mt-4">
        <div className="lg:relative m-0">
            <div className="lg:my-4 lg:mx-4">
              <h2 className="uppercase font-medium text-3xl lg:text-4xl mb-3">{props.title}</h2>
              <form className="w-full">
                <div className="p-3">
                  <label htmlFor="name">Naam</label>
                  <input id="name" onChange={ handleNameChange } maxLength="49" className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-2 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 dark:bg-gray-300 dark:border-gray-400 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Naam" required />
                  <p id="nameHint" className="text-red-700 ml-1"></p>
                </div>
                <div className="p-3">
                  <label htmlFor="email">Email</label>
                  <input id="email" onChange={ handleEmailChange } className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-2 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 dark:bg-gray-300 dark:border-gray-400 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="email" placeholder="Email" required />
                  <p id="emailHint" className="text-red-700 ml-1"></p>
                </div>
                <div className="p-3">
                    <label htmlFor="phone">Telefoonnummer</label>
                  <input id="phone" onChange={ handlePhoneChange } className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border-2 border-light-blue-400 rounded-md w-full py-3 px-4 text-gray-700 dark:bg-gray-300 dark:border-gray-400 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300" type="text" placeholder="Telefoonnummer" />
                  <p id="phoneHint" className="text-red-700 ml-1"></p>
                </div>
                <div className="p-3">
                  <label htmlFor="message">Bericht</label>
                  <textarea id="message" onChange={ handleMessageChange } maxLength="2000" className="resize-none rounded-md block appearance-none placeholder-gray-500 placeholder-opacity-100 border-light-blue-400 w-full dark:bg-gray-300 dark:border-gray-400 py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56" placeholder="Bericht" required></textarea>
                  <p id="message-max" className="text-xl mt-2 mb-0">Karakters: 0/2000</p>
                </div>
                <div className="p-3 pt-2">
                <HCaptcha
                  theme={dark}
                  sitekey="19dfcbb1-b179-4c73-8a56-46a2cb26dea9"
                  onVerify={ (token) => { handleEmail(token); }}
                  ref={captchaRef}
                />
                </div>
              </form>
          </div>
        </div>
      </section>
    </div>
   );
}

function handleNameChange(event) {
  let name = event.target.value;

  if ( name.length > 5 && name.length < 50 ) {
    event.target.classList.remove('border-red-500');
    document.getElementById('nameHint').innerText = '';
  }
  else {
    event.target.classList.add('border-red-500');
    document.getElementById('nameHint').innerText = 'Naam moet tussen de 5 en 50 karakters zijn.';
  }
}

function handleEmailChange(event) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let email = event.target.value;

  if ( re.test(email) ) {
    event.target.classList.remove('border-red-500');
    document.getElementById('emailHint').innerText = '';
  }
  else {
    event.target.classList.add('border-red-500');
    document.getElementById('emailHint').innerText = 'Email adres moet geldig zijn.';
  }
}

function handlePhoneChange(event) {
  let re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  let email = event.target.value;

  if ( re.test(email) ) {
    event.target.classList.remove('border-red-500');
    document.getElementById('phoneHint').innerText = '';
  }
  else {
    event.target.classList.add('border-red-500');
    document.getElementById('phoneHint').innerText = 'Telefoon nummer moet geldig zijn.';
  }
}

function handleMessageChange(event) {
  let message = event.target.value;
  let messageLength = message.length;

  document.getElementById('message-max').classList.remove('text-red-700');

  if(messageLength > 1999) {
    document.getElementById('message-max').classList.add('text-red-700');
  }

  if(messageLength > 2000) {
    event.target.value = message.slice(0, 2000-1);
    return;
  }

  document.getElementById('message-max').innerHTML = 'Karakters: ' + messageLength + '/2000';
}

export default ContactCard;