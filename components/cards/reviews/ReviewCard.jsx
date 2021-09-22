function ReviewCard(props) {
  return ( 
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 mt-4 lg:mt-8">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
              <h3 className="uppercase font-medium text-2xl md:text-4xl md:mb-3">{props.name}</h3>
          </div>
          {/* TODO: FIX IMAGE TO RIGHT */}
          <div className="mb-4 ml-6 lg:my-4 lg:mx-4 lg:col-span-1 w-10/12 md:w-1/2">
              <img alt="Stars" src={props.image} />
          </div>
        </div>
        <hr className="mx-2 border-b-4"/>
        <div className="p-6">
          <h2 className="leading-normal text-2xl font-semibold">{props.title}</h2>
          <p className="mt-2 text-xl">{props.text}</p>
        </div>
      </section>
    </div> 
   );
}

export default ReviewCard;