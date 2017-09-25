/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Current_userService } from './current_user.service';

describe('Service: Current_user', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Current_userService]
    });
  });

  it('should ...', inject([Current_userService], (service: Current_userService) => {
    expect(service).toBeTruthy();
  }));
});