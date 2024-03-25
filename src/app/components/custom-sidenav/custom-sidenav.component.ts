import {
  Component,
  computed,
  signal,
  Output,
  EventEmitter,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

export type MenuItem = {
  name: string;
  icon: string;
  route: string;
};

@Component({
  selector: 'app-custom-sidenav',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
})
export class CustomSidenavComponent {
  @Output() onCollapse: EventEmitter<void> = new EventEmitter<void>();

  // sidenavWidth = computed(() => (this.collapsed() ? '40px' : '200px'));

  menuItems: MenuItem[] = [
    { name: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { name: 'Profile', icon: 'home', route: '/profile' },
    { name: 'Settings', icon: 'settings', route: '/settings' },
  ];

  collapse() {
    this.onCollapse.emit();
  }

  log(text: string) {
    console.log(text);
  }
}
