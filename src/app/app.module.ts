import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppRoutingModule} from './routes/app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    RouterModule,
    AppRoutingModule,
  ],
  providers: [AppRoutingModule],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
