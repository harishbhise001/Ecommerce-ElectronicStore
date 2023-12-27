import httpClient from '../http-common'

const addToWishlist=(WishListDto)=>{
    return httpClient.post('user/addToWishlist',WishListDto);   
};  

const viewWishlist=(userId)=>{
    return httpClient.get(`user/viewWishlist/${userId}`);
}

// check if wishlist spelling is right in UserController
const removeFromWishList=(userId,productId)=>{
    return httpClient.delete(`user/wishlist/remove/${userId}/${productId}`);
};


export default { addToWishlist,viewWishlist,removeFromWishList };