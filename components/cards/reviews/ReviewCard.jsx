function ReviewCard(props) {
  return ( 
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-4 lg:mt-8">
        <div className="lg:flex m-0">
          <div className="p-6">
              <h3 className="uppercase font-medium text-2xl md:text-4xl md:mb-3">{props.name}</h3>
          </div>
          <div className="mb-4 ml-6 lg:ml-auto lg:my-5 lg:mr-4 w-3/4 md:w-1/6">
            <img alt="Stars" src={props.image} />
          </div>
        </div>
        <hr className="ml-6 mx-2"/>
        <div className="p-6">
          <h2 className="leading-normal text-2xl font-semibold">{props.title}</h2>
          <p className="mt-2 text-xl">{props.text}</p>
        </div>
      </section>
    </div> 
   );
}

export default ReviewCard;