import Carousel from 'react-bootstrap/Carousel';


export default function CarouselA() {
 
  return (
    <div className="w-full justify-center items-center flex h-46 bg-white">
    <Carousel className='w-full flex justify-center items-center' indicators={false}>
      <Carousel.Item className='justify-center'>
       
      </Carousel.Item>
      <Carousel.Item className='align-center'>
      <img src="/logo.png" className="m-auto"/>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/logo.png" className="m-auto"/>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}
