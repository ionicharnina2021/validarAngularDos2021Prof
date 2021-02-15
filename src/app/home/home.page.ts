import { HomeControlService } from './home-control.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  algo;
  public controlForm;
  constructor(public homeControlService: HomeControlService) {
    this.controlForm = homeControlService.formGoup;
  }
}
