import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getProducts();
  }
  getProducts(){
    return this._http.get('/welcome')
  };
  addUsers(user){
    return this._http.post('/creating', user)
  };
  getUsers(){
    return this._http.get('/all_users')
  }
  addProducts(newProduct){
    console.log('THis is a new product', newProduct)
    return this._http.post('/new', newProduct);
  };
  getProduct_id(id: string){
    console.log("this is in the service", id)
    return this._http.get('/product/' +id);
  };
  updateProduct(id, product){
    console.log("I am trying to update", id, product)
    return this._http.put('/update/'+id, product);
  };
delete_product(id){
  console.log("Is this deleting?")
  return this._http.delete('/product/'+id);
};
}
