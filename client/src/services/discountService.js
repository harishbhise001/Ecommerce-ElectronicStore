import httpClient from '../http-common'
// discount details is an entity so map its body according to its attribute
const addDiscount=async(DiscountDetails)=>{
    return await httpClient.post('admin/addDiscount',DiscountDetails);
};

//check line number 93 for admin controller getmapping for view to return admin page

const fetchAllDiscountDetails=()=>{
    return httpClient.get('admin/viewDiscounts');
};

// discount details is an entity so map its body according to its attribute
const updateDiscount=(DiscountDetails)=>{
    return httpClient.put('admin/updateDiscount',DiscountDetails);
};

const deleteDiscountDetails=(DiscountDetailsId)=>{
    return httpClient.delete(`admin/deleteDiscount/${DiscountDetailsId}`);
};



export default { addDiscount,fetchAllDiscountDetails,updateDiscount, 
                 deleteDiscountDetails }