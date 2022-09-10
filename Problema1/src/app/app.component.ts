import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Problema1';

    //Variables
    nombre:any = "";
    cif:any = "";
    direccion:any = "";
    grupo:any = 0;
    infoCliente: any = [];


    altaCliente() {

      // We save the client info
      let cliente = [this.nombre, this.cif, this.direccion, this.grupo];

      console.log(cliente);

      // We save client info in the array
      this.infoCliente.push(cliente);

    }
}
