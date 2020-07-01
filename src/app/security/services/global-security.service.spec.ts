import { TestBed } from '@angular/core/testing';

import { GlobalSecurityService } from './global-security.service';

describe('GlobalSecurityService', () => {
  let service: GlobalSecurityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSecurityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
