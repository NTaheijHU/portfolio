function ReviewOverviewCard(props) {

  let reviewAverageTotal = 0;
  let totalReviews = props.reviews.length;

  let reviewStars = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  }

  let reviewPercentage = {
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0
  }

  props.reviews.forEach((review) => {
    reviewAverageTotal += review.stars;
    reviewStars[review.stars] += 1;
  });

  // Calculate average by half points
  let reviewAverage = (reviewAverageTotal / totalReviews).toFixed(1);
  let reviewAverageRounded = Math.floor((reviewAverage)*2)/2;

  Object.keys(reviewStars).forEach((star) => {
    reviewPercentage[star] = Math.round(reviewStars[star] / totalReviews * 100);
  });

  return ( 
    <div>
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
            <div className="lg:mt-4 lg:mx-4 lg:col-span-1">
              <h2 className="uppercase font-medium text-3xl lg:text-4xl mb-3">{props.title}</h2>
              <div className="flex items-center">
                <img className="w-3/4 md:w-1/4" alt="Placeholder" src={"https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-" + reviewAverageRounded + ".svg"} />
                <span className="text-4xl text-gray-700 font-semibold text-opacity-90 ml-2 lg:ml-4">{reviewAverage}</span>
              </div>
              <div className="mt-4">
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-green-500 h-4 rounded-r-lg mt-1.5" style={{ width: reviewPercentage["5"] > 1 ? reviewPercentage["5"] + "%" : 1 + "%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">{reviewStars["5"]} &#8239;({reviewPercentage["5"] + "%" })</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-green-400 h-4 rounded-r-lg mt-1.5" style={{ width: reviewPercentage["4"] > 1 ? reviewPercentage["4"] + "%" : 1 + "%"  }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">{reviewStars["4"]} &#8239;({reviewPercentage["4"] + "%"})</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-yellow-400 h-4 rounded-r-lg mt-1.5" style={{ width: reviewPercentage["3"] > 1 ? reviewPercentage["3"] + "%" : 1 + "%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">{reviewStars["3"]} &#8239;({reviewPercentage["3"] + "%"})</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-yellow-500 h-4 rounded-r-lg mt-1.5" style={{ width: reviewPercentage["2"] > 1 ? reviewPercentage["2"] + "%" : 1 + "%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">{reviewStars["2"]} &#8239;({reviewPercentage["2"] + "%"})</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-red-400 h-4 rounded-r-lg mt-1.5" style={{ width: reviewPercentage["1"] > 1 ? reviewPercentage["1"] + "%" : 1 + "%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">{reviewStars["1"]} &#8239;({reviewPercentage["1"] + "%"})</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:my-4 lg:mx-4 lg:col-span-1 h-2/3 bg-gray-700">
            .
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewOverviewCard;