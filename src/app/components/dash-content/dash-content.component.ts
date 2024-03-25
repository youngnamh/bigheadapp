import { Component, computed, signal } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';

@Component({
  selector: 'app-dash-content',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatToolbar,
    CustomSidenavComponent,
  ],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.css',
})
export class DashContentComponent {
  collapsed = signal(false);
  sideNavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));

  log(text: string) {
    console.log(text);
  }

  collapseNav() {
    console.log(`Nav collapsed ${this.collapsed()}`);
    this.collapsed.set(!this.collapsed());
  }
}
