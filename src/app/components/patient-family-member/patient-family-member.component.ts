import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { PatientInfo } from './patientinfo.model';

@Component({
  selector: 'app-patient-family-member',
  templateUrl: './patient-family-member.component.html',
  styleUrls: ['./patient-family-member.component.css']
})
export class PatientFamilyMemberComponentt implements OnInit {
  patientInfo: PatientInfo = new PatientInfo();
  
  submitted = false;
  fileToUpload: any;
  constructor(private router: Router, private http: HttpClient, private toastr: ToastrService) { }

  ngOnInit(): void {
  }


  saveFamilyMemberInfo() {
   
      this.submitted = true;
      console.log(this.patientInfo.familyMemberName);
      const headers = { 'content-Type': 'application/json' };
      this.http.post<any>("http://localhost:8084/familyMemberAdd", JSON.stringify(this.patientInfo), { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.toastr.success("save successfull");
        }
        )
    
   
  }
}