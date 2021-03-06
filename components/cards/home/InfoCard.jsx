import aboutInfo from '../../../data/about.json';

export default function InfoCard() {
  return(
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90 dark:bg-gray-700 dark:bg-opacity-100 dark:text-gray-100">
        <div className="lg:relative m-0 p-0 lg:flex">
          <img alt="Een foto van mij. Ik ben een man met donkerblond haar en licht blauwe ogen." className="block w-full h-1/3 lg:w-1/3 lg:h-full" src="https://picsum.photos/512/256/?random" />
          <div className="pt-4 pl-4">
            <h3 className="uppercase font-medium text-4xl mb-3">{aboutInfo.name}</h3>
            <p className="leading-normal text-xl">{aboutInfo.aboutText.replace('{age}', getAge(new Date(2004, 2, 30)))}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

function getAge(d1){
  let d2 = new Date();
  let diff = d2.getTime() - d1.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}