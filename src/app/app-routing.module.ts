import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FamilyMemberListComponent } from './components/family-member-list/family-member-list.component';
import { PatientFamilyMemberComponentt } from './components/patient-family-member/patient-family-member.component';

import { PatientComponent } from './components/patient/patient.component';
import { PatientlistComponent } from './components/patientlist/patientlist.component';

const routes: Routes = [

  { path: 'patient', component: PatientComponent },
  { path: 'addfamilymember', component: PatientFamilyMemberComponentt },
  { path: 'patientlist', component: PatientlistComponent },
  { path: 'familymemberlist', component: FamilyMemberListComponent },
 

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
