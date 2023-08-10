import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './views/auth/auth.component';
import { CreateAuthComponent } from './views/create-auth/create-auth.component';

const routes: Routes = [
  {path: 'create-account', component: CreateAuthComponent },
  {path: '',component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }


// ghH
