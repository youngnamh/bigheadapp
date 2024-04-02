import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateGroupModalComponent } from '../../modals/create-group-modal/create-group-modal.component';

@Component({
  selector: 'app-dash-header',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, CreateGroupModalComponent],
  templateUrl: './dash-header.component.html',
  styleUrl: './dash-header.component.css',
})
export class DashHeaderComponent {
  title: string = 'Dashboard';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    let dialogRef = this.dialog.open(CreateGroupModalComponent, {
      data: { name: 'Youngnam' },
    });
  }
}
