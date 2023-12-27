import { Container,Button,Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import config from '../config/serverUrl';
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const showProductDetails=()=>{
  
}
const Style={
    height:400,
    width:'100%'
}
const ProductCarousel=(props)=>{
  const {products}=props;
return(
    <Carousel responsive={responsive}>
      {products.map((product)=>{
        return(
        <Card style={{ 
             width: '18rem',
             borderRadius:10,
             boxShadow:'0 4px 8px rgba(0, 0, 0, 0.5)',
             backgroundColor: '#C8E4B2'}}>
          <Card.Img  variant="top" src={config.serverUrl+'home/'+product.id+'/images'} />
           <Card.Body>
             <Card.Title>{product.name}</Card.Title>
             <Card.Text>
               {product.description}
             </Card.Text>
            <Button onClick={()=>showProductDetails()} variant="success">view</Button>
           </Card.Body>
        </Card>
        )
      })}
    </Carousel>
)
}

export default ProductCarousel;