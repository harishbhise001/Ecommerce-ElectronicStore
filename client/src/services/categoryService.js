import httpClient from '../http-common'

const getCategories= ()=>{
    return httpClient.get('home/getCategories');
 };

const addCategory=(CategoryDto)=>{
    return httpClient.post('admin/addCategory',CategoryDto);
};

export default { getCategories,addCategory };