function ImageCard(props) {
  return ( 
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
        <div className="lg:relative m-0 lg:grid lg:grid-cols-3">
          <div className="p-6 lg:col-span-2">
              <h2 className="font-medium text-4xl mb-3">{props.title}</h2>
              <p className="leading-normal">{props.text}</p>
          </div>
          <div className="lg:my-4 lg:mx-4 lg:col-span-1">
            <img alt="Placeholder" src={props.image} />
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