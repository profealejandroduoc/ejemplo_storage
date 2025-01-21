import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/interfaces/usuario';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
  standalone:false,
})
export class CrearcuentaPage implements OnInit {

  usuario:Usuario={
    username:'',
    password:''
  }

  constructor() { }

  ngOnInit() {
  }

  crearCuenta(){
    console.log(this.usuario);
  }
}
