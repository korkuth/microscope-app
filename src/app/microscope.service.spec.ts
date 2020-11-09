import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MicroscopeService } from './microscope.service';

describe('MicroscopeService', () => {
  let service: MicroscopeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ]
    });
    service = TestBed.inject(MicroscopeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
