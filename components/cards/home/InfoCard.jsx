export default function InfoCard() {
  return(
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
        <div className="lg:relative m-0 lg:flex">
          <img alt="Placeholder" className="block w-full h-1/3 lg:w-1/3 lg:h-full" src="https://picsum.photos/512/256/?random" />
          <div className="p-6">
            <h3 className="font-medium text-4xl mb-3">Noah Taheij</h3>
            <p className="leading-normal">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, esse ad? Tempore perferendis quia, voluptates laboriosam pariatur aspernatur quo. Laborum veniam molestiae odit omnis possimus ipsum quia odio. Perspiciatis enim delectus expedita aspernatur ex eaque quia reiciendis fugit quidem magni!</p>
          </div>
        </div>
      </section>
    </div>
  );
}