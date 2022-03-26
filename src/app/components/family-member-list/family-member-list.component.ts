import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PatientInfo } from '../patient-family-member/patientinfo.model';

@Component({
  selector: 'app-family-member-list',
  templateUrl: './family-member-list.component.html',
  styleUrls: ['./family-member-list.component.css']
})
export class FamilyMemberListComponent implements OnInit {

  getData: any = [];
  patientinfo: PatientInfo = new PatientInfo();
  familyMemberName = "familyMemberName";
  isSave: boolean = true;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getAllPatientFamilyMembers();
  }

  getAllPatientFamilyMembers() {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:8084/getAllfamilyMember', { headers: header }).subscribe((res) => {
     
      this.getData = res;
      console.log(this.getData);
    }, err => {
      console.log("load failed");
    })
  }

}
