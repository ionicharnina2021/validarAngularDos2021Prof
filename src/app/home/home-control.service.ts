import { MyFormGroup } from './../validators/myformgroup';
import { Injectable } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  ValidationErrors,
} from '@angular/forms';
import { MyFormControl } from '../validators/myFormControl';

@Injectable({
  providedIn: 'root',
})
export class HomeControlService {
  private _myFormGroup: MyFormGroup;
  regex: string | RegExp;

  validationMessages = new Map<string, Map<string, string>>();
  miControlMap = new Map<string, string>();
  constructor() {
    this.miControlMap.set('minlength', 'No se si funcionara');
    this.validationMessages.set('miControl', this.miControlMap);
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
    let prueba = this.formGoup.controls;
    let cosa = this.formGoup.get('miControl');
    console.log('nose');
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
  validateControl(element): boolean {
    return (
      this.formGoup.get('miControl').dirty &&
      !this.formGoup.get('miControl').valid
    );
  }
  getErrorMessage(control, error: ValidationErrors) {
    // console.log(this.validationMessages.get(control).get(Object.keys(error)[0]));
    return this.validationMessages.get(control).get(Object.keys(error)[0]);
  }
}
