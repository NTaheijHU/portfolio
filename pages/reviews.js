import ReviewCard from "../components/cards/reviews/ReviewCard";
import ReviewOverviewCard from "../components/cards/reviews/ReviewOverviewCard";
import Hero from "../components/hero/Hero";

import reviewInfo from '../data/reviews.json';

export function Reviews(props) {
  const hero = {
    title: "Reviews",
  };

  return (
    <div className="bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-100">
      <Hero hero={hero} />
        {/* Review Overview */}
        <div id="review-overview">
          <br />
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-16">
              <ReviewOverviewCard
                title={"Klanten Reviews (" + props.reviewInfo.length + ")"}  
                reviews={props.reviewInfo}   
              >  
              </ReviewOverviewCard>
          </div>
        </div>
        
        {/* Reviews */}
        <div id="reviews">
          <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-16">
            { props.reviewInfo.length > 0 && props.reviewInfo.map((review) => {
                return (
                  <ReviewCard 
                    key={review.name}
                    name={review.name}
                    title={review.reviewTitle ? review.reviewTitle : review.quote.slice(0, 20) + "..." }
                    text={review.review}
                    image={"https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-" + review.stars + ".svg"}
                  />
                )
              })
            }
          </div>
          { props.reviewInfo.length === 0 &&
            <div className="text-red-500 ml-2 mt-2 md:mt-4 mb-8">
              <p className="text-center text-3xl md:text-4xl">Geen reviews gevonden.</p>
            </div>
          }
        </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { reviewInfo },
  }
}

export default Reviews;
  