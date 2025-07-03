import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaStatus } from './arena-status';

describe('ArenaStatus', () => {
  let component: ArenaStatus;
  let fixture: ComponentFixture<ArenaStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenaStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(ArenaStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
