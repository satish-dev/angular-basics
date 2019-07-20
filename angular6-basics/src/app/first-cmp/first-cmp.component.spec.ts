import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstCmpComponent } from './first-cmp.component';

describe('FirstCmpComponent', () => {
  let component: FirstCmpComponent;
  let fixture: ComponentFixture<FirstCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
