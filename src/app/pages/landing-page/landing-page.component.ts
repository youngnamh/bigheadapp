import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { LpMainContentComponent } from '../../components/lp-main-content/lp-main-content.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, LpMainContentComponent, FooterComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {}
