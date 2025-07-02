import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Nav } from './nav';

describe('NavComponent', () => {
  let component: Nav;
  let fixture: ComponentFixture<Nav>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Nav],
      imports: [MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
