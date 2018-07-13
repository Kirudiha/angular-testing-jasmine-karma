import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  private _firstNumber:number=10;
    private _secondNumber:number=20;
    private _result : number = 0;
    public addNumbers():number{
        this._result = this._firstNumber + this._secondNumber;
        return this._result;
    }
    public subtractNumbers():number{
        this._result = this._firstNumber - this._secondNumber;
        return this._result;
    }
    public multiplyNumbers():number{
        this._result = this._firstNumber * this._secondNumber;
        return this._result;
    }
}
