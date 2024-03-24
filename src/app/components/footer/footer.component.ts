import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  currentYear!: number;

  constructor() {}

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
  }
}
