import { TestBed } from '@angular/core/testing';

import { ScrollbarToSectionService } from './scrollbar-to-section.service';

describe('ScrollbarToSectionService', () => {
  let service: ScrollbarToSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollbarToSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
