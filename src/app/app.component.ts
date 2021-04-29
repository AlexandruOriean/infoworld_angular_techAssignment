import { Component } from '@angular/core';
import {WaitingListComponent} from './components/patients/waiting-list/waiting-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'patients';

  onNavigate(feature: string): void {
    this.loadedFeature = feature;
  }
}
