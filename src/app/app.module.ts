import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartiesComponentComponent } from './parties-component/parties-component.component';
import { DetailsPartyComponentComponent } from './details-party-component/details-party-component.component';
import { DoctorComponentComponent } from './doctor-component/doctor-component.component';
import { PartiesServiceService } from './services/parties-service.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MedecinPipe} from './pipes/medecin.pipe'
@NgModule({
  declarations: [
    AppComponent,
    PartiesComponentComponent,
    DetailsPartyComponentComponent,
    DoctorComponentComponent,
    MedecinPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule

  ],
  providers: [PartiesServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
