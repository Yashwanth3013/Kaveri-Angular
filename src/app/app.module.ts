import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PendingApplicationComponent } from './pending-application/pending-application.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SmapleComponent } from './smaple/smaple.component';
import { EditCourtOrderComponent } from './edit-court-order/edit-court-order.component';

@NgModule({
  declarations: [
    AppComponent,
    PendingApplicationComponent,
    SmapleComponent,
    EditCourtOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
