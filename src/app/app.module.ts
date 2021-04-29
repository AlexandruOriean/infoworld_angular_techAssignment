import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { PatientFormComponent } from './components/patients/patient-form/patient-form.component';
import { WaitingListComponent } from './components/patients/waiting-list/waiting-list.component';
import { DeletePatientComponent } from './components/patients/delete-patient/delete-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PatientFormComponent,
    WaitingListComponent,
    DeletePatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
