import axios from "axios";
const BASE_URL ='http://localhost:3000/products';
class ProductService{  
saveProduct(product){
return axios.post(BASE_URL,product);
}

updateProduct(id,product){
return axios.put(BASE_URL+`/${id}`,product);
}

 listAllProducts(){
return axios.get(BASE_URL);
}

 findProductById(id){
    return axios.get(BASE_URL+`/${id}`);


}
}
export default new ProductService;
