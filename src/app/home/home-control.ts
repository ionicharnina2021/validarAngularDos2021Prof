import { MyFormGroup } from '../validators/myformgroup';
import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MyFormControl } from '../validators/myFormControl';


export class HomeControlService {
  private _myFormGroup: MyFormGroup;
  regex: string | RegExp;
  constructor() {
    this._myFormGroup = new MyFormGroup([
      new MyFormControl(
        new FormControl('', [Validators.minLength(3)]),
        'miControl'
      ),
      new MyFormControl(
        new FormControl(
          '',
          Validators.compose([Validators.required, Validators.maxLength(3)])
        ),
        'compuesto'
      ),
      new MyFormControl(
        new FormControl('', Validators.pattern(this.regex)),
        'regular'
      ),
      new MyFormControl(
        new FormControl('', Validators.pattern('hola[ao]')),
        'regularDos'
      ),
    ]);
    let prueba=this.formGoup.controls;
    let cosa=this.formGoup.get('miControl');
    console.log("nose");
    
  }

  /**
   * Getter myFormGroup
   * @return {MyFormGroup}
   */
  public get myFormGroup(): MyFormGroup {
    return this._myFormGroup;
  }
  public get formGoup(): FormGroup {
    return this.myFormGroup.formGroup;
  }
}