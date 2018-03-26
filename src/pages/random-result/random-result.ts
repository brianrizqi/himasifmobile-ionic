import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.result = navParams.get('res');
    alert(this.result);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandomResultPage');
  }

}
