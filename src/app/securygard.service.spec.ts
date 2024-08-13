import { TestBed } from '@angular/core/testing';

import { SecurygardService } from './securygard.service';

describe('SecurygardService', () => {
  let service: SecurygardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecurygardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
