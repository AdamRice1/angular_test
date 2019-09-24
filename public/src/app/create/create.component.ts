import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ThrowStmt, analyzeAndValidateNgModules } from '@angular/compiler';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newQuestion: any;
  errMsg: any;
  err_one: any;
  err_two: any;
  err_three: any;
  err_four: any;
  people: any;
  last_user: any;
  name = String;

  constructor(private _httpService: HttpService,  private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getAllUsersFromService();
    this.newQuestion = {question: "", option_one: "", option_two: "", option_three: "", option_four: "", human: this.name };
    
  };
  getAllUsersFromService(){
    console.log("getting users")
    let users = this._httpService.getUsers();
    users.subscribe(data => {
      this.people = data;
      this.last_user = this.people[(this.people.length-1)].name;
      console.log("thos os ;ast ;iast", this.last_user)
      this.name = this.last_user
      console.log(this.name)

    })
  };
  onSubmit(){
    let observable = this._httpService.addProducts(this.newQuestion);
    observable.subscribe((data: any) => {
      console.log("New component", data);
    try {this.errMsg = data.errors.question.message;
        this.err_one = data.errors.option_one.message;
        this.err_two = data.errors.option_two.message;
        this.err_three = data.errors.option_three.message;
        this.err_four = data.errors.option_four.message;
    }
    catch{
      this.newQuestion = {question: "", option_one: "", option_two: "", option_three: "", option_four: ""};
      this.goto()
    }  
    })

  };
  goto(){
    this._router.navigate(['/surveys'])
  };
  }

