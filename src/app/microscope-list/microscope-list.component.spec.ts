import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { MicroscopeService } from '../microscope.service';

import { MicroscopeListComponent } from './microscope-list.component';

describe('MicroscopeListComponent', () => {
  let component: MicroscopeListComponent;
  let fixture: ComponentFixture<MicroscopeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MicroscopeListComponent],
      imports: [HttpClientModule, RouterModule.forRoot([])],
      providers: [MicroscopeService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroscopeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
