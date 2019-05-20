import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

// Component
import {Task1Component} from '../components/task1/task1.component';
import {Task2Component} from '../components/task2/task2.component';
import {Task3Component} from '../components/task3/task3.component';
import {Task4Component} from '../components/task4/task4.component';
import {Task5Component} from '../components/task5/task5.component';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {HomeComponent} from '../components/home/home.component';
import {ButtonsModule, CardsFreeModule, WavesModule} from 'angular-bootstrap-md';
import { CardUserComponent } from '../components/task1/card-user/card-user.component';
import {UsersT1Service} from '../services/users-t1.service';
import {HttpClientModule} from '@angular/common/http';




const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'task1', component: Task1Component},
  {path: 'task2', component: Task2Component},
  {path: 'task3', component: Task3Component},
  {path: 'task4', component: Task4Component},
  {path: 'task5', component: Task5Component},
  {path: '**', component: PageNotFoundComponent}
];


@NgModule({
  declarations: [Task1Component, Task2Component, Task3Component, Task4Component, Task5Component, PageNotFoundComponent,
    HomeComponent, CardUserComponent, ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    CardsFreeModule,
    WavesModule,
    ButtonsModule,
    HttpClientModule
  ],
  providers: [UsersT1Service],
})
export class AppRoutingModule { }
