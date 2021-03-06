import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientComponent } from './components/patient/patient.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PatientlistComponent } from './components/patientlist/patientlist.component';
import { PatientFamilyMemberComponentt } from './components/patient-family-member/patient-family-member.component';
import { FamilyMemberListComponent } from './components/family-member-list/family-member-list.component';



@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientlistComponent,
    PatientFamilyMemberComponentt,
    FamilyMemberListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
