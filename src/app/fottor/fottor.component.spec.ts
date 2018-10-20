import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FottorComponent } from './fottor.component';

describe('FottorComponent', () => {
  let component: FottorComponent;
  let fixture: ComponentFixture<FottorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FottorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FottorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
