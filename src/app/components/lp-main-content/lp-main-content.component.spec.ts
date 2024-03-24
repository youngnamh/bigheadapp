import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpMainContentComponent } from './lp-main-content.component';

describe('LpMainContentComponent', () => {
  let component: LpMainContentComponent;
  let fixture: ComponentFixture<LpMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpMainContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LpMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
