import { Container,Button,Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import config from '../config/serverUrl';
import { useNavigate  } from 'react-router-dom';

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


const Style={
    height:400,
    width:'100%'
}
const ProductCarousel=(props)=>{
  const navigate = useNavigate();
  const {products}=props;
  
  const showProductDetails=(id)=>{
    navigate("/product", {state : id});
}

return(
    <Carousel responsive={responsive}>
      {products.map((product)=>{
        return(
        <Card key={product.id} style={{ 
             width: '28rem',
             height: '30rem',
             borderRadius:10,
             boxShadow:'0 4px 8px rgba(0, 0, 0, 0.5)',
             backgroundColor: '#C8E4B2',
             margin: '20px 30px'}}>
          <Card.Img  variant="top" src={product.thumbnail} width='250px' height='300px'/>
           <Card.Body>
             <Card.Title>{product.title}</Card.Title>
             <Card.Text>
               {product.description}
             </Card.Text>
            <Button onClick={()=>showProductDetails(product.id)} variant="success">view</Button>
           </Card.Body>
        </Card>
        )
      })}
    </Carousel>
)
}

export default ProductCarousel;