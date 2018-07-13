import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsComponent } from './fruits.component';

describe('FruitsComponent', () => {
  // let firstNumber :number = 5;
  // let secondNumber :number = 4;
  // let result : number = 0;
  let objCaculator : FruitsComponent;
  let component: FruitsComponent;
  let fixture: ComponentFixture<FruitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsComponent);
    component = fixture.componentInstance;
    this.objCaculator = new FruitsComponent();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check number addition', () => {
    this.firstNumber=10;
    this.secondNumber=20;
    this.result=this.firstNumber + this.secondNumber;
    expect(this.objCaculator.addNumbers())
        .toEqual(this.result);
});
it('check number Subtract', () => {
    this.firstNumber=10;
    this.secondNumber=20;
    this.result=this.firstNumber - this.secondNumber;
    expect(this.objCaculator.subtractNumbers())
        .toEqual(this.result);
});
it('check number Multiply', () => {
    this.firstNumber=10;
    this.secondNumber=20;
    this.result=this.firstNumber * this.secondNumber;
    expect(this.objCaculator.multiplyNumbers())
        .toEqual(this.result);
});
});
