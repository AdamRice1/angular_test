import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SurveysComponent } from './surveys/surveys.component';
import { CreateComponent } from './create/create.component';
import { VoteComponent } from './vote/vote.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'surveys', component: SurveysComponent},
  {path: 'create', component: CreateComponent},
  {path: "vote/:id", component: VoteComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/home'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
