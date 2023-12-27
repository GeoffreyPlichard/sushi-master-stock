import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
    private auth: Auth = inject(Auth);
  

  
}
