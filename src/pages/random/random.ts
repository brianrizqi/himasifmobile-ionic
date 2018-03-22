import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-random',
  templateUrl: 'random.html'
})
export class RandomPage {
  public matkul: any;
  public jml_mhs: any;
  public jml_kelompok: any;
  public jml_mhs_perkelompok: any;
  public jml_sisa_mhs: any;

  constructor(public navCtrl: NavController) {

  }

  jml_mhsChanged(){
    if(this.jml_kelompok != undefined){
      this.jml_mhs_perkelompok = Math.floor(this.jml_mhs / this.jml_kelompok);
      this.jml_sisa_mhs = this.jml_mhs % this.jml_kelompok;
    }
    else if(this.jml_mhs_perkelompok != undefined){
      this.jml_kelompok = Math.ceil(this.jml_mhs / this.jml_mhs_perkelompok);
      this.jml_sisa_mhs = this.jml_mhs % this.jml_kelompok;
    }
  }

  jml_kelompokChanged(){
    if(this.jml_mhs != undefined){
      this.jml_mhs_perkelompok = Math.floor(this.jml_mhs / this.jml_kelompok);
      this.jml_sisa_mhs = this.jml_mhs % this.jml_kelompok;
    }
  }

  jml_mhs_perkelompokChanged(){
    if(this.jml_mhs != undefined){
      this.jml_kelompok = Math.ceil(this.jml_mhs / this.jml_mhs_perkelompok);
      this.jml_sisa_mhs = this.jml_mhs % this.jml_kelompok;
    }
  }

  initVar(){
    this.jml_mhs_perkelompok = Math.floor(this.jml_mhs / this.jml_kelompok);
    this.jml_sisa_mhs = this.jml_mhs % this.jml_kelompok;
  }

  resetVal(){
    this.jml_mhs = "";
    this.jml_mhs_perkelompok = "";
    this.jml_kelompok = "";
    this.jml_sisa_mhs = "";
    this.matkul = "";
  }

  randomIt(){
    this.initVar();
    var res = "";
    var xx = new Array();
    var a = new Array();
    for(var i=1; i<=this.jml_mhs; i++){
      a.push(i);
    }
    var num = 1;

    if(this.jml_sisa_mhs > 0){
      //1st
      for(var i = num; i <= this.jml_sisa_mhs; i++){
        res = res + "Kelompok - " + i + "\n";

        for(var j = 0; j < this.jml_mhs_perkelompok + 1; j++){
          var x = Math.floor((Math.random()*a.length));
          res = res + a[x] + "\n";
          // xx.push(a[x]);
          a.splice(x,1);
        }
        num += 1;

      }

      //2nd
      for(var i = num; i <= this.jml_kelompok; i++){
        res = res + "Kelompok - " + i + "\n";

        for(var j = 0; j < this.jml_mhs_perkelompok; j++){
          var x = Math.floor((Math.random()*a.length));
          res = res + a[x] + "\n";
          // xx.push(a[x]);
          a.splice(x,1);
        }
      }
      res = res + "\n";
    }
    res = res + "<b>Copyright \u00a9 HIMASIF UNEJ</b>";

    alert(res);
  }



}
