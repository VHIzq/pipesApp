import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
  ],
})
export class PrimeNgModule { }


/*
este modulo solo sirve para exportar los modulos por eso solo
dejo el export
*/
