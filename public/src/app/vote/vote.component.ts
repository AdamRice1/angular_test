import { HttpService } from '../http.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
vote: any;
oneSurvey: any;
oneSurvey_id: any;
option_one_votes: number;
option_two_votes: number;
option_three_votes: number;
option_four_votes: number;

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("is this working", params['id'])
      this.oneSurvey_id = params['id']
    });
    this.getOneProductFromService(this.oneSurvey_id);
    this.option_one_votes = 0;
    this.option_two_votes = 0;
    this.option_four_votes = 0;
    this.option_three_votes = 0;
  };
  getOneProductFromService(oneSurvey_id){
    let one = this._httpService.getProduct_id(this.oneSurvey_id);
    one.subscribe(data => {
      console.log('AHHH', data);
      this.oneSurvey = data;
    });
  };
  bigVote(){
    let vote = this._httpService.updateProduct(this.oneSurvey_id, this.oneSurvey);
    vote.subscribe(data => {
      console.log("trying to vote", data);
    })
    this.getOneProductFromService(this.oneSurvey_id)
  };
   votes4(){
     console.log("this work>")
     this.option_four_votes = this.option_four_votes + 1;
   };
   votes3(){
     console.log("this work>")
     this.option_three_votes = this.option_three_votes + 1;
   };
   votes2(){
     console.log("this work>")
     this.option_two_votes = this.option_two_votes + 1;
   };
   votes1(){
     console.log("this work>")
     this.option_one_votes = this.option_one_votes + 1;
   }

}
