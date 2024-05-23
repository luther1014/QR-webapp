import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrAppContainerComponent } from './qr-app-container.component';

describe('QrAppContainerComponent', () => {
  let component: QrAppContainerComponent;
  let fixture: ComponentFixture<QrAppContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QrAppContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QrAppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
