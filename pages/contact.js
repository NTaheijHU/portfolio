import ContactCard from "../components/contact/ContactCard";
import Hero from "../components/hero/Hero";


export default function Contact() {
  const hero = {
    title: "Contact",
  };

  return (
    <div>
      <Hero hero={hero} />

      {/* Contact */}
      <div id="contact">
          <br />
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-0">
              <ContactCard
                title="Neem contact op"          
              >  
              </ContactCard>
          </div>
        </div>
    </div>
  );
}

  