import { HttpService } from '../http.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newUser: any;
  errMsg: any;
  key: any;

  constructor(private _httpService: HttpService,  private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.newUser = {name: ""}
 };
goto(){
  console.log('this Working>>>')
  this._router.navigate(['/surveys'])
};

onSubmit(){
  let observable = this._httpService.addUsers(this.newUser);
  observable.subscribe((data: any) => {
    console.log("New User", data);

    try {this.errMsg = data.errors.name.message;
    }
    catch{ 
      console.log("did we make it here?");
      this.newUser = {name: ""};
      localStorage.setItem(this.key, this.newUser.name)
      this.goto();

    }

  })
 

};
}
