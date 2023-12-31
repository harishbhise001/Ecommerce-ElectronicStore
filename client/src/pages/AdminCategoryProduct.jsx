import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import productServices from '../services/productServices';
import validation from '../services/validation';
import { Button,Table,Container } from 'react-bootstrap';
import log from '../services/logService';

export const AdminCategoryProduct = () => {
    const location=useLocation()
    const { productCategory }=location.state;
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        getProducts();
    },[])


    const getAllProducts = ()=>{
      var allProducts = [

        // Laptops 

        {
          id : 1,
          name : "Dell Inspiron",
          price : 50000,
          brand : "Dell" ,
          category : "Laptop"
        },
        {
          id : 2,
          name : "Lenovo Thikpad",
          price :40000,
          brand : "Lenovo" ,
          category : "Laptop"
        },
        {
          id : 3,
          name : "Acer 4532",
          price : 75000,
          brand : "Acer" ,
          category : "Laptop"
        },

        // Mobiles

        {
          id : 1,
          name : "Vivo Y12",
          price : 10000,
          brand : "Vivo" ,
          category : "Mobile"
        },
        {
          id : 2,
          name : "Iphone X",
          price : 100000,
          brand : "Apple" ,
          category : "Mobile"
        },
        {
          id : 3,
          name : "Galaxy Ultra Pro Max",
          price : 30000,
          brand : "Samsung" ,
          category : "Mobile"
        },

        // TV

        {
          id : 1,
          name : "Samsung 1432",
          price : 20000,
          brand : "Samsung" ,
          category : "TV"
        },
        {
          id : 2,
          name : "LG LED",
          price : 15000,
          brand : "LG" ,
          category : "TV"
        },
        {
          id : 3,
          name : "VS 9999",
          price : 25000,
          brand : "Vijay Sales" ,
          category : "TV"
        },
  
        // Watches

        {
          id : 1,
          name : "Titan SU32",
          price : 200000,
          brand : "Titan" ,
          category : "Watch"
        },
        {
          id : 2,
          name : "Rolex Royal-32",
          price : 300000,
          brand : "Rolex" ,
          category : "Watch"
        },
        {
          id : 3,
          name : "Fastrack Mini",
          price : 30000,
          brand : "Fastrack" ,
          category : "Watch"
        },

      ]

      return allProducts;
    }



    const getProducts= async ()=>{

      var allProducts = getAllProducts();
      var _products = new Array();
      allProducts.map((product)=>{
        if(product.category === productCategory) _products.push(product);
      })

      setProducts(_products);

        // try{
        //     log(productCategory);
        //     const response = 
        //         await productServices.getProductByCategory(productCategory);
        //     const result=response.data;
        //     log(response.data);
        //     setProducts(result.data);
        // }catch(ex){
        //     validation.error("something went wrong");
        // }
    }

    const removeProduct = async (id)=>{

      var _product = [...products];
      for(var i=0;i<_product.length;i++){
        if(id === _product[i].id && _product[i].category === productCategory){
          _product.splice(i,1);
          break;
        }
      }
      setProducts(_product);

        // try{
        //     const response= await productServices.removeProduct(id);
        //     validation.success("product removed successfully");
        //     window.location.reload(false);
        // }catch(ex){
        //     validation.error("something went wrong")
        //     console.log(ex);
        // }
    }

  return (
    <Container> 
    <div className='p-5'>  
  <Table striped bordered hover >  
  <thead>  
    <tr>  
      <th>#</th>  
      <th> Name</th>  
      <th> Price</th>
      <th> Brand</th>   
    </tr>  
  </thead>  
  <tbody>  
    {products.map((product)=>{
        return(
         <tr key={product.id}>  
         <td>{product.id}</td>  
         <td>{product.name}</td>
         <td>₹{product.price}</td>   
         <td>{product.brand}</td>
         <td>
            <Button 
            onClick={()=>removeProduct(product.id)} 
            className="btn btn-danger">
            Remove
            </Button>
        </td>   
       </tr>  
        )})}    
  </tbody>  
</Table>  
</div>   
    </Container>
  )
}
