import ReviewCard from "../components/cards/reviews/ReviewCard";
import ReviewOverviewCard from "../components/cards/reviews/ReviewOverviewCard";
import Hero from "../components/hero/Hero";


export default function Reviews() {
  const hero = {
    title: "Reviews",
  };

  return (
    <div>
      <Hero hero={hero} />
        {/* Review Overview */}
        <div id="review-overview">
          <br />
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
              <ReviewOverviewCard
                title="Klanten Reviews (31)"          
              >  
              </ReviewOverviewCard>
          </div>
        </div>
        
        {/* Reviews */}
        <div id="reviews">
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-2 md:px-4">
            <ReviewCard 
              name="Persoon van Persoon"
              title="Erg goede service"
              text="Erg goede service, geen problemen ondervonden bij het laten maken van mijn website. Alle dingen die ik wou werden goed en snel doorgevoerd. Het design ziet er keurig uit en is zeer gebruiksvriendelijk. Zeker een aanrader!"
              image="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            />
            <ReviewCard 
              name="Persoon van Persoon"
              title="Erg goede service"
              text="Erg goede service, geen problemen ondervonden bij het laten maken van mijn website. Alle dingen die ik wou werden goed en snel doorgevoerd. Het design ziet er keurig uit en is zeer gebruiksvriendelijk. Zeker een aanrader!"
              image="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            />
            <ReviewCard 
              name="Persoon van Persoon"
              title="Erg goede service"
              text="Erg goede service, geen problemen ondervonden bij het laten maken van mijn website. Alle dingen die ik wou werden goed en snel doorgevoerd. Het design ziet er keurig uit en is zeer gebruiksvriendelijk. Zeker een aanrader!"
              image="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            />
            <ReviewCard 
              name="Persoon van Persoon"
              title="Erg goede service"
              text="Erg goede service, geen problemen ondervonden bij het laten maken van mijn website. Alle dingen die ik wou werden goed en snel doorgevoerd. Het design ziet er keurig uit en is zeer gebruiksvriendelijk. Zeker een aanrader!"
              image="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg"
            />
          </div>
        </div>
    </div>
  );
}

  