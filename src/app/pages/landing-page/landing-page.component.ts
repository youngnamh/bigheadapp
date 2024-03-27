import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LpMainContentComponent } from '../../components/lp-main-content/lp-main-content.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, LpMainContentComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('LandingPageComponent initialized');
    this.getData(3);
  }

  getData(index: number): void {
    this.apiService.getShirt(index).subscribe(
      (data) => {
        console.log('Data fetched from shirts: ', data);
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
