import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './views/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { CreateAuthComponent } from './views/create-auth/create-auth.component';


@NgModule({
  declarations: [
    AuthComponent,
    CreateAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [
    AuthComponent,
  ]
})
export class AuthModule { }


// ghH
