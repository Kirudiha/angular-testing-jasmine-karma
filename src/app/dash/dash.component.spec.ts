// dash.component.spec.ts

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';

describe('DashComponent', () => {
  let component: DashComponent;
  let fixture: ComponentFixture<DashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});