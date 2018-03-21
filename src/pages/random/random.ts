import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-random',
  templateUrl: 'random.html'
})
export class RandomPage {
  jml_mhs: number;
  jml_kelompok: number;
  jml_mhs_perkelompok: number;
  jml_sisa_mhs: number;
  constructor(public navCtrl: NavController) {

  }

  randomIt(){

  }



}
