import { TestBed } from '@angular/core/testing';

import { ConsoleloggerService } from './consolelogger.service';

describe('ConsoleloggerService', () => {
  let service: ConsoleloggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleloggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
