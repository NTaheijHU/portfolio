function ImageCard(props) {
  return ( 
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
              <h2 className="uppercase font-medium text-4xl mb-3">{props.title}</h2>
              <p className="leading-normal text-xl">{props.text}</p>
          </div>
          <div className="lg:my-4 lg:mx-4 lg:col-span-1">
            <img alt="Placeholder" src={props.image} alt={props.alt ? props.alt : "Geen extra informatie beschikbaar."}/>

            <div>
              {props.children}
            </div>
          </div>
        </div>
      </section>
    </div>  
  );
}

export default ImageCard;