import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MicroscopeDetailsComponent } from './microscope-details.component';

describe('MicroscopeDetailsComponent', () => {
  let component: MicroscopeDetailsComponent;
  let fixture: ComponentFixture<MicroscopeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroscopeDetailsComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroscopeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
