import {useReducedMotion, motion} from "framer-motion";

function ReviewOverviewCard(props) {

  return ( 
    <div>
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-2 md:mt-4">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
            <div className="lg:mt-4 lg:mx-4 lg:col-span-1">
              <h2 className="uppercase font-medium text-3xl lg:text-4xl mb-3">{props.title}</h2>
              <div className="flex items-center">
                <img className="w-3/4 md:w-1/4" alt="Placeholder" src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-4.5.svg" />
                <span className="text-4xl text-gray-700 font-semibold text-opacity-90 ml-2 lg:ml-4">4.6</span>
              </div>
              <div className="mt-4">
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-green-500 h-4 rounded-r-lg mt-1.5" style={{width: "83%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">26 &#8239;(83%)</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-green-400 h-4 rounded-r-lg mt-1.5" style={{width: "6%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">&nbsp;&nbsp;2 &nbsp;&nbsp;&nbsp;(6%)</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-yellow-400 h-4 rounded-r-lg mt-1.5" style={{width: "3%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">&nbsp;&nbsp;1 &nbsp;&nbsp;&nbsp;(3%)</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-yellow-500 h-4 rounded-r-lg mt-1.5" style={{width: "3%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">&nbsp;&nbsp;1 &nbsp;&nbsp;&nbsp;(3%)</span>
                </div>
                <div className="flex">
                  <div className="box-border w-3/4 lg:w-2/5">
                    <div className="bg-gray-400 h-4 rounded-r-lg mt-1.5" style={{width: "100%" }}>
                      <div className="bg-red-400 h-4 rounded-r-lg mt-1.5" style={{width: "1%" }} />
                    </div>
                  </div>
                  <span className="text-gray-600 text-lg ml-2">&nbsp;&nbsp;0 &nbsp;{"(<1%)"}</span>
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