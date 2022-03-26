import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFamilyMemberComponent } from './components/patient-family-member/patient-family-member.component';

import { PatientComponent } from './components/patient/patient.component';
import { PatientlistComponent } from './components/patientlist/patientlist.component';

const routes: Routes = [

  { path: 'patient', component: PatientComponent },
  { path: 'patientfamilymember', component: PatientFamilyMemberComponent },
  { path: 'patient', component: PatientlistComponent },
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
