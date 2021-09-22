function SkillCard(props) {
  return ( 
    <div className="">
      <article className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-70">
        <header className="p-2 md:p-4">
          <a className="no-underline text-black" href={props.link}>
            <h1 className="text-4xl font-bold text-center">
                {props.title}
            </h1>
          </a>
        </header>

        <section className="pb-2 md:pb-4 px-2">
          <div className="no-underline text-black text-center">
            <p className="text-xl">
              {props.text}
            </p>
            <p className="text-2xl pt-2">
              <a className="no-underline hover:underline text-blue-700" href={props.link}>
                Bekijk Projecten
              </a>
            </p>
          </div>
        </section>
      </article>
    </div>
  );
}

export default SkillCard;