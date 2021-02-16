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
  gerFormGroup(): any {
   return this.myFormGroup.formGroup;
  }
  private _myFormGroup: MyFormGroup;
  regex = '';
  private nombreCampos=["nombre","apellidos","otro","otro"];
  public nombreControles = ['miControl', 'compuesto', 'regular', 'regularDos'];
  private controles = [
    new MyFormControl('', [Validators.minLength(3)]),
    new MyFormControl('',Validators.compose([Validators.required, Validators.maxLength(3)])),
    new MyFormControl('', Validators.pattern(this.regex)),
    new MyFormControl('', Validators.pattern('hola[ao]')),
  ];

  constructor() {
    this._myFormGroup = new MyFormGroup(this.nombreCampos,this.nombreControles,this.controles);
    this.myFormGroup.insertarValidationMessages('miControl',['minlength'],['No se si funcionara']);
  }

  /**
   * Getter myFormGroup
   * @return {MyFormGroup}
   */
  public get myFormGroup(): MyFormGroup {
    return this._myFormGroup;
  }

  validateControl(element): boolean {
    return (
      this.myFormGroup.getControl(element).dirty &&
      !this.myFormGroup.getControl(element).valid)
  }

  getErrorMessage(control) {
    let algo=this.myFormGroup.getControl(control)
    console.log("sucio "+algo.dirty);    
    let errores= algo.errors;
    return algo.getValidationMessage(Object.keys(errores)[0]);
  }
}
