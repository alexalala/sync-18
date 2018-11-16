import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../shared/components/login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  declarations: [
    ProfileComponent,
  ]
})
export class UsersModule { }
