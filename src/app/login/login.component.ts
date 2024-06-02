import { Component, Inject } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    @Inject(LoginService) private loginService: LoginService
  ){}

  login(){
    console.log("login clicked")
    // const data = new FormData();
    // formData.append('name', 'Roshan');
    let data = {
      name: 'Roshan',
    }
    this.loginService.login(data);
  }
}
