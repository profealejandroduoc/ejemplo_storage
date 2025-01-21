import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {

  nombres=["max","claudio","luchito"];

  constructor() {}

  ngOnInit() {
    console.log(this.nombres);
  }

  onClick(nombre:string){
    console.log("eliminar " + nombre);
  }
}
