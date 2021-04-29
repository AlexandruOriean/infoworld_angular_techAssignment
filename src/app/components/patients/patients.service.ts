import {Injectable} from '@angular/core';

import {Subject} from 'rxjs';
import {PatientSex} from './patient-sex.enum';
import {Patient} from './patient.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  patientsChanged = new Subject<Patient[]>();

  private patients: Patient[] = [
    new Patient(
      'Alex',
      'Oriean',
      '29-09-1989',
      PatientSex.male,
      '1890929883029',
      '0212223344',
      1),
    new Patient(
      'Ion',
      'Popescu',
      '12-04-1995',
      PatientSex.male,
      '1950412883029',
      '0213334455',
      2),
    new Patient(
      'Maria',
      'Constantinescu',
      '26-02-1981',
      PatientSex.female,
      '1892909883029',
      '02144455664',
      3),
  ];

  constructor() {
  }

  getPatients(): Patient[] {
    return this.patients.slice();
  }

  getPatient(index: number): Patient {
    return this.patients[index];
  }

  addPatient(patient: Patient): void {
    this.patients.push(patient);
    this.patientsChanged.next(this.patients.slice());
  }

  editPatient(index: number, newPatient: Patient): void {
    this.patients[index] = newPatient;
    this.patientsChanged.next(this.patients.slice());
  }

  deletePatient(orderNum: number): PatientsService{
    this.patients = this.patients.filter((patient) => patient.orderNum !== orderNum);
    return this;
  }

  getOrderNum(): number {
    return this.patients[this.patients.length - 1].orderNum + 1;
  }

}
