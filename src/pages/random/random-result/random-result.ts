import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';

/**
 * Generated class for the RandomResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-random-result',
  templateUrl: 'random-result.html',
})
export class RandomResultPage {
  result: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.result = navParams.get('resOri');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomResultPage');
  }

}
