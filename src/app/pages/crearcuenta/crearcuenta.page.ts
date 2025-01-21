import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { StorageService } from 'src/app/services/istorage-service.service';

@Component({
  selector: 'app-crearcuenta',
  templateUrl: './crearcuenta.page.html',
  styleUrls: ['./crearcuenta.page.scss'],
  standalone: false,
})
export class CrearcuentaPage implements OnInit {

  usuario: Usuario = {
    username: '',
    password: ''
  }

  datosusuario:any;

  constructor(private servicio: StorageService, private router: Router) { }

  ngOnInit() {
  }

  crearCuenta() {
    //buscar si existe el usuario
    /*console.log("Buscando.....");
    console.log(this.servicio.get(this.usuario.username));
    console.log("Fin busqueda");*/
    let datos=this.servicio.get(this.usuario.username);
    console.log("LEYENDO");
    console.log(datos);
    if (datos!==undefined){
      datos.then(value=>{
        console.log(value);
        if(value==null){
          this.guardar();
        }
      });
      

  }
}


  guardar()
  {
    console.log("Guardado!!!");
    this.servicio.set(this.usuario.username, this.usuario);
    this.router.navigate(['/login']);
  }
}
