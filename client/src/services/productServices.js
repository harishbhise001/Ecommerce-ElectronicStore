import httpClient from '../http-common'


const getProductByCategory=(productCategory)=>{
    return httpClient.get(`home/view/${productCategory}`);
};

const getProductByName=(productName)=>{
    return httpClient.get(`home/search/${productName}`);
};

const getProductByBrand=(productBrand)=>{
    return httpClient.get(`home/search/${productBrand}`);
};

const getReviews=(productId)=>{
    return httpClient.get(`home/getReviews/${productId}`);
};
// download image or getting images
const downloadImage=(productId)=>{
    return httpClient.get(`home/${productId}/images`);
};

const showAllProducts=()=>{
    return httpClient.get('admin/viewAll');
};

const deleteProduct=(productId)=>{
    return httpClient.delete(`admin/deleteProduct/${productId}`);
};

// need to change this to productDto
const addProductDetails= async (product)=>{
    return await httpClient.post('admin/addProduct',product);
}

const removeProduct=(productId)=>{
    return httpClient.put(`admin/removeProduct/${productId}`);
};

const getProductDetailsById=(productId)=>{
    return httpClient.get(`admin/getProductDetails/${productId}`);
};
//we are sending productDto so map the attributes with productDto from com.app.dto
const editProductDetails=(productId,ProductDto)=>{
    return httpClient.put(`admin/editProduct/${productId}`,ProductDto);
};

const getAllRemovedProducts=()=>{
    return httpClient.get('admin/getRemovedProducts');
};

const makeProductAvailable=(productId)=>{
    return httpClient.put(`admin/makeProductAvailable/${productId}`);
};

const incrementProductQuantity=(cartId,quantity)=>{
    return httpClient.put(`user/cart/incrementProductQuantity/${cartId}/${quantity}`);
};

const addProductReview=(ReviewDto)=>{
    return httpClient.post('user/addProductReview',ReviewDto);
};

const getProductByRating=()=>{
    return httpClient.get('home/getProduct/rating');
};

export default { showAllProducts,deleteProduct,
                 getProductByBrand,getProductByCategory
                ,getProductByName,getReviews,downloadImage,
                 addProductDetails,removeProduct,getProductDetailsById, 
                 editProductDetails,getAllRemovedProducts,makeProductAvailable,
                 incrementProductQuantity,addProductReview,getProductByRating };