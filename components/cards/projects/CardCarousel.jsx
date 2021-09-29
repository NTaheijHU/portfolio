import { Carousel } from 'react-responsive-carousel';

export default function CardCarousel() {
  return ( 
    <Carousel autoPlay 
      showArrows={true} emulateTouch={true} infiniteLoop={true} showThumbs={true} showStatus={false}
      stopOnHover={true} swipeable={true} dynamicHeight={false} useKeyboardArrows={true}>
      <div>
          <img src="https://picsum.photos/1024/512/?random" />
          <p className="legend">Legend 1</p>
      </div>
      <div>
          <img src="https://picsum.photos/1024/513/?random" />
          <p className="legend">Legend 2</p>
      </div>
      <div>
          <img src="https://picsum.photos/1024/514/?random" />
          <p className="legend">Legend 3</p>
      </div>
      <div>
          <img src="https://picsum.photos/1024/515/?random" />
          <p className="legend">Legend 4</p>
      </div>
      <div>
          <img src="https://picsum.photos/1024/516/?random" />
          <p className="legend">Legend 5</p>
      </div>
      <div>
          <img src="https://picsum.photos/1024/517/?random" />
          <p className="legend">Legend 6</p>
      </div>
    </Carousel>
   );
}