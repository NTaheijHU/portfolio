export default function ReviewCard(props) {
  return(
    <div className="">
      <section className= "pt-4 rounded-xl shadow mx-auto my-10 mt-2 md:mt-4 bg-gray-50 bg-opacity-90">
        <blockquote className="m-2 lg:m-4">
          <p className= "font-semibold"> "{props.quote}" </p>
        </blockquote>
        <div className= "text-white bg-blue-500 p-8 rounded-b-xl md:flex md:items-center">
          <img src={props.image} alt="" className="w-24 h-24 rounded-full border-4 border-white md:mr-4" />
          <div>
          <p className="font-bold"> {props.name}</p>
          <p> {props.company}</p>
          </div>
        </div>
      </section>
    </div>
  );
}