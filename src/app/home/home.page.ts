import { Component } from '@angular/core';
import { HomeControl } from './home-control';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  algo;
  public controlForm;
  private homeControl:HomeControl;
  constructor() {
    this.homeControl= new HomeControl();
    this.controlForm=this.homeControl.formGoup;
    console.log("a ver aqui");
    let cosa=this.controlForm.get('miControl');
    console.log("a ver aqui");    
  }



}
