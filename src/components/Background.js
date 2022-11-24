import Carousel from "react-bootstrap/Carousel";
import { Button } from "react-bootstrap";
import Image1 from "../assets/BURJ KHALIFA.jpg";
import Image2 from "../assets/BURJ KHALIFA2.jpg";
import Image3 from "../assets/Workplace.jpg";
import Image4 from "../assets/Efeirtower.jpg";

function BackgroundSlide() {
  return (
    <Carousel className='carousel'>
      <Carousel.Item interval={1000}>
        <img className='d-block w-100 ' src={Image1} alt='First slide' />
        <Carousel.Caption>
          <h3 className='burj-head'>BURJ KHALIFA</h3>
          <p className='burj-khalifa'>
            The Burj Khalifa is a mixed-use skyscraper located in Dubai, U.A.E.
            It is the world’s tallest building, according to all three of the
            main criteria by which such buildings are judged. The Burj Khalifa
            was officially named to honour the president of the neighbouring
            emirate of Abu Dhabi, Sheikh Khalīfah ibn Zāyid Āl Nahyān.
            <Button
              variant='outline-secondary'
              className='btn btn-tag btn-rounded'
            >
              Read More
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img className='d-block w-100' src={Image2} alt='Second slide' />
        <Carousel.Caption>
          <h3>BURJ KHALIFA</h3>
          <p>
            The Burj Khalifa is a mixed-use skyscraper located in Dubai, U.A.E.
            It is the world’s tallest building, according to all three of the
            main criteria by which such buildings are judged. The Burj Khalifa
            was officially named to honour the president of the neighbouring
            emirate of Abu Dhabi, Sheikh Khalīfah ibn Zāyid Āl Nahyān.
            <Button
              variant='outline-secondary'
              className='btn btn-tag btn-rounded'
            >
              Read More
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Image3} alt='Third slide' />
        <Carousel.Caption>
          <h3>Work Space</h3>
          <p>
            This is the new modern workspace and this is how you can set up your
            own work space as a developer or a designer.
            <Button
              variant='outline-secondary'
              className='btn btn-tag btn-rounded'
            >
              Read More
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Image4} alt='Fourth slide' />
        <Carousel.Caption>
          <h3 className='eiffer-head'>The Eiffel Tower</h3>
          <p className='eiffel-tower'>
            The Eiffel Tower is the most visited monument with an entrance fee
            in the world: 6.91 million people ascended it in 2015. It was
            designated a monument history in 1964, and was named part of a
            UNESCO World Heritage Site ("Paris, Banks of the Seine") in 1991.
            <Button
              variant='outline-secondary'
              className='btn btn-tag btn-rounded'
            >
              Read More
            </Button>
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BackgroundSlide;
