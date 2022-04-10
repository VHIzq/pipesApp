import { Component } from '@angular/core';
import { interval } from 'rxjs'; 
import { tap} from 'rxjs/operators'

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
    this.nombre= 'Futami';
    this.genero= 'femenino';
  }

  quitarCliente() {
    return this.clientes.pop();
  }

  //keyvalue PIpe
  persona = {
    nombre: 'Gotou',
    edad: 19,
    direccion: 'Tokyo, Japon'
  }

  heroe = [{
    nombre: 'Robin',
    vuela: 'false'
  },
  {
    nombre: 'Raven',
    vuela: 'true'
  }, 
  {
    nombre: 'Chico bestia',
    vuela: true
  },
  ]

  //Async Pipe
  miObservable = interval( 2000 )
    .pipe( tap( () => console.log('intervalo')) ) // 0, 1,2, 3, 4

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve('Tenemos data de promesa')
    }, 3500)
  })

}
