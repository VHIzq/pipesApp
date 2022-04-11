import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';
import { VuelaPipe } from '../../pipes/vuela.pipe';
@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

    enMayusculas: boolean = true;

    ordenarPor: string = '';

    heroes: Heroe[] = [
      {
        nombre: 'Robin',
        vuela: false,
        color: Color.rojo
      },
      {
        nombre: 'Raven',
        vuela: true,
        color: Color.negro
      },
      {
        nombre: 'Beast Boy',
        vuela: true,
        color: Color.verde
      },
      {
        nombre: 'Star Fire',
        vuela: true,
        color: Color.azul
      },

    ]

    cambiarValor() {
      this.enMayusculas = !this.enMayusculas
    }

    cambiarOrden( valor: string) {
      this.ordenarPor = valor;
      console.log(valor);
    }

}
