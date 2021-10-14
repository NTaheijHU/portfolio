import ContactCard from "../components/contact/ContactCard";
import Hero from "../components/hero/Hero";


export default function Contact(props) {
  const hero = {
    title: "Contact",
  };

  return (
    <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100">
      <Hero hero={hero} />

      {/* Contact */}
      <div id="contact">
          <br />
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-16">
              <ContactCard
                endpoint={props.url}
                title="Neem contact op"          
              >  
              </ContactCard>
          </div>
        </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { url: process.env.API_ENDPOINT },
  }
}

  