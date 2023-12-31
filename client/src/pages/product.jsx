import { useEffect, useState } from "react";
import { Button, Col, Row ,Image, Container} from "react-bootstrap";
import productService from '../services/productServices';
import ProductCarousel from "../components/trendingproduct";
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Product=()=>{

    const location = useLocation();
    const id = location.state;
    const [products, setProducts] = useState([]);
    const [product,setProduct]=useState([]);

    const getAllProducts  = ()=>{
        axios.get('https://dummyjson.com/products/').then(response=>{
            setProducts(response.data.products);
        })
    }

    useEffect(()=>{

        axios.get('https://dummyjson.com/products/'+id).then(response=>{
            setProduct(response.data);
        })

        getAllProducts();

        // const response=productService.getProductDetailsById();
        // if(response.status!=='successs')
        // {

        // }

    },[])

    const Style={
        image:{
            height: '700px',
            width: '700px',
            borderWidth: '2px',
            borderColor:'lightgrey',
            borderStyle: 'solid'
        },
        borderClass:{
            borderWidth: '2px',
            borderColor:'lightgrey',
            borderStyle: 'solid',
            padding: '30px 50px'
        }
    }
return(
    <Row className="mt-5">
        <Row style={Style.borderClass}>
            <Col style={Style.borderClass}>
            <Container>
            <Image style={Style.image} src={product.thumbnail} thumbnail></Image>
            </Container>
            {/* <ProductCarousel products={products}/> */}
            </Col>
            <Col style={Style.borderClass}>
            <Row>
                <Col className="mb-5"><h1>product details</h1></Col>
            </Row>
            <Row><Col style={Style.borderClass} className="mb-5"><h1>{product.price} Rs</h1></Col></Row>
            <Row><Col style={Style.borderClass} className="mb-5"><h1>{product.description}</h1></Col></Row>
            <Row><Col><Button style={{width:180}} className="btn btn-dark fs-3">add to cart</Button></Col></Row>
            </Col>
        </Row>
        <Row style={{textAlign:'center'}}>
            <br />  <hr />
            <h1>Similar Products</h1>
            <ProductCarousel products={products}/>
        </Row>
    </Row>
)
}

export default Product;