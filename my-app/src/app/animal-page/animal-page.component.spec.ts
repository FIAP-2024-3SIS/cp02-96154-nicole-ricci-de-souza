import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimalPageComponent } from './animal-page.component';

describe('AimalPageComponent', () => {
  let component: AimalPageComponent;
  let fixture: ComponentFixture<AimalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimalPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AimalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
