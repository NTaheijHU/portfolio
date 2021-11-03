function SkillCard(props) {
  return ( 
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/2">
      <article className="min-h-full overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-white mt-2 md:mt-4">
        <header className="p-2 md:p-4">
          <a className="no-underline text-black dark:text-gray-100" href={props.link}>
            <h1 className="text-4xl font-bold text-center">
                {props.title}
            </h1>
          </a>
        </header>
        <section className="pb-2 md:pb-4 px-2">
          <div className="no-underline text-black dark:text-gray-100 text-center">
            <p className="text-xl">
              {props.text}
            </p>
          </div>
        </section>
        <p className="text-2xl pt-2 text-center mb-2">
          <a className="no-underline hover:underline text-blue-700 dark:text-blue-500" href={props.link}>
            Bekijk Projecten
          </a>
        </p>
      </article>
    </div>
  );
}

export default SkillCard;