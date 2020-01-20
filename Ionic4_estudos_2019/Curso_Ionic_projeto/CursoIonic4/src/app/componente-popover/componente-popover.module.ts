import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ComponentePopoverPage } from './componente-popover.page';
import { ComponentePopoverInternoComponent } from '../componente-popover-interno/componente-popover-interno.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentePopoverPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],     //TEM QUE IMPORTAR AQUI TBM A PAGINA CRIADA
  declarations: [ComponentePopoverPage, ComponentePopoverInternoComponent],
  //Aqui TBM
  entryComponents: [ComponentePopoverInternoComponent]

})
export class ComponentePopoverPageModule {}
