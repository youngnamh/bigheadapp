import { Component } from '@angular/core';
import { DashContentComponent } from '../../components/dash-content/dash-content.component';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Athlete } from '../../interfaces/Athlete';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DashContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  private athleteInfo!: Athlete | null;

  constructor(
    private route: ActivatedRoute,
    private stateService: StateService
  ) {
    if (this.stateService.getMainUser() === null) {
      this.athleteInfo = this.stateService.getMainUser();
    }
  }
}
