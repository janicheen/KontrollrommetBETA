/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyInterceptorService } from './my-interceptor.service';

describe('Service: MyInterceptor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyInterceptorService]
    });
  });

  it('should ...', inject([MyInterceptorService], (service: MyInterceptorService) => {
    expect(service).toBeTruthy();
  }));
});