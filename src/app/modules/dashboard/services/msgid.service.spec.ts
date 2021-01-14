import { TestBed } from '@angular/core/testing';

import { MsgidService } from './msgid.service';

describe('MsgidService', () => {
  let service: MsgidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MsgidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
