import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../patient/patient.model';

@Component({
  selector: 'app-patientlist',
  templateUrl: './patientlist.component.html',
  styleUrls: ['./patientlist.component.css']
})
export class PatientlistComponent implements OnInit {

  getPatient: any = [];
  patient: Patient = new Patient();
  patientName = "patientName";
  isSave: boolean = true;
  constructor(private http: HttpClient, private router: Router, private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getAllPatient();
  }

  getAllPatient() {
    const header = {
      "Content-Type": "application/json"
    };
    this.http.get('http://localhost:8084/getAllPatient', { headers: header }).subscribe((res) => {
      //console.log(res);
      this.getPatient = res;
      console.log(this.getPatient);
    }, err => {
      console.log("load failed");
    })
  }



  edit(patient: any) {
    this.patient.id = patient.id;
    this.patient.patientName = patient.patientName;
    this.patient.gender = patient.gender;
    this.patient.age = patient.age;
    this.patient.dob = patient.dob;
    this.patient.phonNo = patient.phonNo;
    this.patient.email = patient.email;
    this.patient.address = patient.address;
    this.patient.photos = patient.photos;
    this.router.navigate(['/patient'], { state: { patient: patient, isSave: false } })
  }

  delete(patient: any) {
    if (confirm(" Confirm delete")) {     
      const headers = { 'content-Type': 'application/json' };
      this.http.get("http://localhost:8084/deletePatient/" + patient.id, { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.getAllPatient();
          this.toastr.warning("Patient delete");
        })
    }

  }

}
