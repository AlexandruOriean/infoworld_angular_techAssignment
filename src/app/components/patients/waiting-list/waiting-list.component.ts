import {Component, OnInit} from '@angular/core';
import {Patient} from '../patient.model';
import {Subscription} from 'rxjs';
import {PatientsService} from '../patients.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.css']
})
export class WaitingListComponent implements OnInit {
  patients: Patient[];
  subscription: Subscription;

  constructor(
    private patientsService: PatientsService) {
  }

  ngOnInit(): void {
    this.patientsService.patientsChanged.subscribe((patients: Patient[]) => {
      this.patients = patients;
    });
    this.getPatients();
  }

  getPatients() {
    this.patients = this.patientsService.getPatients();
  }
}
