import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { DummyDataService } from '../services/dummy-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    DummyDataService
  ]
})
export class SharedModule { }
