import aboutInfo from '../../../data/about.json';

export default function InfoCard() {
  return(
    <div className="">
      <section className="overflow-hidden rounded-lg shadow-lg bg-gray-50 bg-opacity-90">
        <div className="lg:relative m-0 p-0 lg:flex">
          <img alt="Een foto van mij. Ik ben een man met donkerblond haar en licht blauwe ogen." className="block w-full h-1/3 lg:w-1/3 lg:h-full" src="https://picsum.photos/512/256/?random" />
          <div className="p-4">
            <h3 className="uppercase font-medium text-4xl mb-3">{aboutInfo.name}</h3>
            <p className="leading-normal text-xl">{aboutInfo.aboutText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}