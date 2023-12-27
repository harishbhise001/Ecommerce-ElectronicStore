import httpClient from '../http-common'

const addToCart= async (CartDto)=>{
    return await httpClient.post('user/addToCart',CartDto);
};

const viewCart= async (userId)=>{
    return await httpClient.get(`user/viewCart/${userId}`);
};

const deleteProductFromCart= async (cartId)=>{
    return await httpClient.delete(`user/deleteProductFromCart/${cartId}`);
}; 

const checkout=(CheckoutDto)=>{
    return httpClient.post('user/checkout',CheckoutDto);
};

export default { addToCart,viewCart,deleteProductFromCart,checkout };
