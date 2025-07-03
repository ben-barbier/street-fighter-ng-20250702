import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaPage } from './arena-page';

describe('ArenaPage', () => {
  let component: ArenaPage;
  let fixture: ComponentFixture<ArenaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArenaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ArenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
