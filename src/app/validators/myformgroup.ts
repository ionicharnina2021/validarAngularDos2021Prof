import { MyFormControl } from './myFormControl';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class MyFormGroup {
  private _formGroup: FormGroup;
  private myMap = new Map<String, FormControl>();


  constructor(private myFormControls: MyFormControl[]) {
    this._formGroup = new FormGroup({});
    myFormControls.forEach((element) => {
      this.insertarControl(element.name, element.formControl);
    });
  }

  insertarControl(key: string, value: FormControl) {
    this._formGroup.addControl(key, value);
    this.myMap.set(key, value);
  }
  getControl(key: string) {
    this._formGroup.get(key);
  }

  public get formGroup(): FormGroup {
		return this._formGroup;
	}

  
}
