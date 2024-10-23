import axiosClient from '@components/Services/axiosClient.js';
const getProducts = async () => {
    const res = await axiosClient('/product');


    
    return res.data.contents
    
}
export {getProducts};