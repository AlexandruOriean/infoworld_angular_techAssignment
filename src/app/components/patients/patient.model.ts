import {PatientSex} from './patient-sex.enum';

export class Patient {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  sex: PatientSex;
  cnp: string;
  phone: string;
  orderNum: number;

  constructor(firstName: string, lastName: string, dateOfBirth: string, sex: PatientSex, cnp: string, phone: string, orderNum: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.sex = sex;
    this.cnp = cnp;
    this.phone = phone;
    this.orderNum = orderNum;
  }
}
