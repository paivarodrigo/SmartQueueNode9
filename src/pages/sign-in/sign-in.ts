import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-sign-in",
  templateUrl: "sign-in.html"
})
export class SignInPage {
  fullName: any;
  birthDate: any;
  cpf: any;
  email: any;
  homeTown: any;
  password: any;
  confirmPassword: any;
  constructor(public navCtrl: NavController) {}

  register() {
    if (
      validateFullName(this.fullName) &&
      validateBirthDate(this.birthDate) &&
      validateCpf(this.cpf) &&
      validateEmail(this.email) &&
      validateHomeTown(this.homeTown) &&
      validatePassword(this.password, this.confirmPassword)
    ) {
      alert("Cadastrado");
    }
  }

  goBack() {
    this.navCtrl.push(LoginPage);
  }
}

function validateFullName(fullName) {
  if (fullName != undefined) {
    fullName = fullName.split(" ");
    if (fullName.length > 1) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function validateBirthDate(birthDate) {
  return true;
}

function validateCpf(cpf) {
  return true;
}

function validateEmail(email) {
  return true;
}

function validateHomeTown(homeTown) {
  return true;
}

function validatePassword(password, confirmPassword) {
  if (password != undefined && confirmPassword != undefined) {
    if (password == confirmPassword) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}
