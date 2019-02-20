import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: AbstractControl;
  password: AbstractControl;
  formgroup: FormGroup; 
  constructor(public formbuilder:FormBuilder, public appCtrl: App, public aAuth : AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {

    this.formgroup = formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password:['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });

    this.email = this.formgroup.controls['email'];
    this.password = this.formgroup.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login(){
    var error = "";
    var errorContainer = document.getElementById('error_message');
    this.aAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value).then(
      e => {
        // If signin is successful
        errorContainer.style.display = "none";
        alert("Success")
        
      }).catch(e => { // if signin isnt successful
        if(this.email.value && this.password.value){
        //console.log(e)
        if(e.code == "auth/user-not-found" || e.code == "auth/wrong-password" || e.code == "auth/too-many-requests"){
          error = "Incorrect email or password";
        }

        if(e.code == "auth/invalid-email"){
          error = "Email entered is invalid"
        }
        errorContainer.innerHTML = error;
      }
      });
  }

}
