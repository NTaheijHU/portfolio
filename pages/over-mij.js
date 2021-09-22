import ImageCard from "../components/cards/ImageCard";
import Hero from "../components/hero/Hero";


export default function OverMij() {
  const hero = {
    title: "Over Mij",
  };

  return (
    <div>
      <Hero hero={hero} />

      {/* About Me */}
      <div id="about-me">
        <br />
        <div className="container mb-12 mt-4 md:mt-8 mx-auto px-4 md:px-12">
            <ImageCard />
        </div>
      </div>
    </div>
  );
}

  