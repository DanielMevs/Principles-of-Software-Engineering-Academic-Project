import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import { ValidatorFn } from '@angular/forms'
//import { AngularFireAuth } from '@angular/fire/auth';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  email: AbstractControl;
  password: AbstractControl;
  confirmPassword: AbstractControl;
  signupValidation: FormGroup; 
  constructor(public formbuilder:FormBuilder, 
              public appCtrl: App, 
              public aAuth : AngularFireAuth, 
              public navCtrl: NavController, 
              public navParams: NavParams) {

    this.signupValidation = formbuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      password:['', Validators.compose([Validators.required, Validators.minLength(6)])],
      confirmPassword:['', Validators.compose([Validators.required, Validators.minLength(6), this.equalto('password')])]
    });

    

    this.email = this.signupValidation.controls['email'];
    this.password = this.signupValidation.controls['password'];
    this.confirmPassword = this.signupValidation.controls['confirmPassword'];
  }
  

  equalto(field_name): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        let input = control.value;
        let isValid = control.root.value[field_name] == input;
        if (!isValid)
            return {'equalTo': {isValid}};
        else
            return null;
    };
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){
      var error = "";
      var errorContainer = document.getElementById('signuperror_message');
      this.aAuth.auth.createUserWithEmailAndPassword(this.email.value, this.password.value).then(
      e => {
        // If signin is successful
        errorContainer.style.display = "none";
        alert("Success");
        
      }).catch(e => { // if signin isnt successful

        if(e.code == 'auth/email-already-in-use'){
          error = "An account already exists with this email address. Please try logging in with this email. If you cant remember your password, please reset your password.";
        }
        errorContainer.innerHTML = error;
      })
    
  }
}
