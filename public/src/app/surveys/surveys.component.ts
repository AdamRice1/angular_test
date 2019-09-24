import { HttpService } from '../http.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {
  surveys: any;
  people: any;

  constructor(private _httpService: HttpService,  private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getProductsFromService();
    this.getAllUsersFromService();
  };
  getProductsFromService(){
    console.log("We are here!!!!")
    let product_observable = this._httpService.getProducts();
    product_observable.subscribe(data => {
      console.log("There are the products", data)
      this.surveys = data;
    })
  };
  getAllUsersFromService(){
    console.log("getting users")
    let users = this._httpService.getUsers();
    users.subscribe(data => {
      this.people = data;
    })
  }
  deleteOneProduct(id){
    let survey = this._httpService.delete_product(id);
    survey.subscribe(data => {
    })
    this.getProductsFromService();
  };

}
