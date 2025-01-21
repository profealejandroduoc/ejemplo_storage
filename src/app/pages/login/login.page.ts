import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  usr:Usuario={
    username:'',
    password:''
  }
  constructor() { }

  ngOnInit() {
  }

  iniciar()
  {

  }
}
