import { FormControl } from '@angular/forms';
export class MyFormControl {
  constructor(private _formControl: FormControl, private _name: string) {}
  /**
   * Getter formControl
   * @return {FormControl}
   */
  public get formControl(): FormControl {
    return this._formControl;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter formControl
   * @param {FormControl} value
   */
  public set formControl(value: FormControl) {
    this._formControl = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }
}
