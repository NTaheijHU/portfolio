import { Carousel } from 'react-responsive-carousel';

export default function CardCarousel(props) {
  return ( 
    <Carousel autoPlay 
      showArrows={true} emulateTouch={true} infiniteLoop={true} showThumbs={true} showStatus={false}
      stopOnHover={true} swipeable={true} dynamicHeight={false} useKeyboardArrows={true}>
        {props.children}
    </Carousel>
   );
}