import { TestBed } from '@angular/core/testing';

import { TeammanagementService } from './teammanagement.service';

describe('TeammanagementService', () => {
  let service: TeammanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeammanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
