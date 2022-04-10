import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent  {

    enMayusculas: boolean = true;
    
    cambiarValor() {
      this.enMayusculas = !this.enMayusculas
    }
}
