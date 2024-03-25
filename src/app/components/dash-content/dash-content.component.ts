import { Component, computed, signal, OnInit, ViewChild } from '@angular/core';
import {
  MatDrawerMode,
  MatSidenav,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbar } from '@angular/material/toolbar';
import { CustomSidenavComponent } from '../custom-sidenav/custom-sidenav.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DashHeaderComponent } from '../dash-header/dash-header.component';
import { DashBodyComponent } from '../dash-body/dash-body.component';

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
    DashHeaderComponent,
    DashBodyComponent,
  ],
  templateUrl: './dash-content.component.html',
  styleUrl: './dash-content.component.css',
})
export class DashContentComponent {
  collapsed = signal(false);
  sideNavWidth = computed(() => (this.collapsed() ? '65px' : '250px'));
  mode!: MatDrawerMode;

  constructor(private breakPointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Call the function to set the initial mode
    this.setMode();

    // Subscribe to screen size changes to update the mode
    this.breakPointObserver
      .observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web])
      .subscribe(() => {
        this.setMode();
      });
  }

  log(text: string) {
    console.log(text);
  }

  collapseNav(isCollapsed: boolean) {
    console.log(`Nav collapsed ${this.collapsed()}`);
    this.collapsed.set(!this.collapsed());
  }

  clickContent() {
    if (this.breakPointObserver.isMatched(Breakpoints.Handset)) {
      this.collapseNav(true);
    }
  }

  setMode(): void {
    if (this.breakPointObserver.isMatched(Breakpoints.Handset)) {
      this.mode = 'side'; // For small screens like phones
    } else {
      this.mode = 'side'; // For larger screens like tablets and desktops
    }
  }
}
