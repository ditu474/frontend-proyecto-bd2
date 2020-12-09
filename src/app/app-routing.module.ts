import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: FormComponent, canActivate: [ AuthGuard ]},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
