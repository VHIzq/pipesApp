import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nSelect
  nombre: string = 'Yoshida';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Sayu', 'Mai', 'Tusbasa', 'Sakura','Futami' ];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos # clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    console.log('cambiando');
    this.nombre= 'Futami';
    this.genero= 'femenino';
  }

  quitarCliente() {
    return this.clientes.pop();
  }

}
