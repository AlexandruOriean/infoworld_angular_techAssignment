import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {PatientsService} from '../../patients/patients.service';
import {Patient} from '../patient.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-delete-patient',
  templateUrl: './delete-patient.component.html',
  styleUrls: ['./delete-patient.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DeletePatientComponent implements OnInit {
  closeResult: string;
  patient: Patient;

  @Input() orderNum: number;
  constructor(
    private modalService: NgbModal,
    private patientService: PatientsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  getPatientByOrderNum(): Patient{
    return this.patientService.getPatient(+this.activatedRoute.snapshot.paramMap.get('id'),);
  }

  onDeletePatient(orderNum: number): void {
    this.patientService.deletePatient(orderNum);
    this.router.navigate(['/']);
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  openDelete(content): void {
    this.modalService.open(content, {centered: true});
  }
}
