import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Component({
  selector: 'page-nimchecker',
  templateUrl: 'nimchecker.html'
})
export class NimcheckerPage {
  // url:string;
  // data:string;

  // constructor(public http:Http, public navCtrl: NavController) {
  constructor(public navCtrl: NavController) {
  }

  // ionViewDidLoad(){
  //
  // }
  //
  // loadUser(){
  //   this.http.get('http://himasif.ilkom.unej.ac.id/nimchecker/resultMobile.php')
  //   .map(res => res.json())
  //   .subscribe(data =>{
  //     this.data = data.results;
  //     console.log(data.results);
  //
  //   },err => {
  //     console.log(err);
  //   });
  // }

}
